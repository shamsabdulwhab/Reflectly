import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function reloadWhenFilesChange() {
  return {
    name: 'reload-when-files-change',
    configureServer(server) {
      const snapshots = new Map()

      function checkFile(file) {
        let text = ''
        try {
          text = fs.readFileSync(file, 'utf8')
        } catch {
          return
        }

        const previous = snapshots.get(file)
        snapshots.set(file, text)
        if (previous !== undefined && previous !== text) {
          server.watcher.emit('change', file)
        }
      }

      function checkFolder(folder) {
        let entries = []
        try {
          entries = fs.readdirSync(folder, { withFileTypes: true })
        } catch {
          return
        }

        for (const entry of entries) {
          const fullPath = path.join(folder, entry.name)
          if (entry.isDirectory()) {
            checkFolder(fullPath)
          } else if (/\.(jsx|js|css|html)$/.test(entry.name)) {
            checkFile(fullPath)
          }
        }
      }

      checkFolder(path.resolve('src'))
      checkFile(path.resolve('index.html'))

      const timer = setInterval(() => {
        checkFolder(path.resolve('src'))
        checkFile(path.resolve('index.html'))
      }, 400)

      server.httpServer?.on('close', () => clearInterval(timer))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), reloadWhenFilesChange()],
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
