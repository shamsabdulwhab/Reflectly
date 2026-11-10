import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import './WriteReflection.css'
import CircleShape from '../components/CircleShape.jsx'
import TriangleShape from '../components/TriangleShape.jsx'

const guidedQuestions = [
  'What happened?',
  'How did teammates experience it?',
  'What could we change?',
]

function WriteReflection({ onUpload }) {
  const navigate = useNavigate()
  const [text, setText] = useState('')

  const editorRef = useRef(null)

   // I created a function to handle the Upload button:
  function uploadReflection() {
    const trimmedText = text.trim()
    if (trimmedText === '') return

    onUpload(trimmedText)
    setText('')
    //then leaves the Write page and shows the Discussion Board.
    navigate('/board')
  }

  useEffect(() => {
    const box = editorRef.current
    if (!box) {
      return
    }
    box.style.height = 'auto'
    box.style.height = `${box.scrollHeight}px`
  }, [text])
  
  return (
    <main className="write-page">
      <CircleShape className="write-shape write-shape--circle" />
      <TriangleShape className="write-shape write-shape--triangle" />

      <div className="write-toolbar">
        <Button variant="red" type="button" onClick={() => navigate('/guidance')}>
          <svg className="write-button__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2.5l1.6 5.2 5.2 1.6-5.2 1.6L12 16.1l-1.6-5.2-5.2-1.6 5.2-1.6L12 2.5z"
              fill="currentColor"
            />
          </svg>
          Write_with_AI
        </Button>
        <Button type="button" onClick={() => navigate('/guidance')}>
          More Guidance
        </Button>
      </div>

      <div className="write-layout">
        <Card>
          <h1>Write the reflection</h1>
          <textarea
            ref={editorRef}
            className="write-editor"
            value={text}
            onChange={(event) => setText(event.target.value)}
            aria-label="Write the reflection"
          />
          <div className="write-tools">
            <button className="write-tool" type="button" aria-label="Copy reflection">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="8" y="7" width="11" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M6 16V5.5A1.5 1.5 0 0 1 7.5 4H16" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
            <button className="write-tool" type="button" aria-label="Record reflection">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M6.5 11a5.5 5.5 0 0 0 11 0M12 16.5V20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </Card>

        <Card>
          <h2>Guided Questions</h2>
          <ol>
            {guidedQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </Card>

        <div className="write-upload">
          <Button wide type="button" onClick={uploadReflection}>
            Upload my reflection
            <svg className="write-button__icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8.5V15M9.5 11.5 12 8.5l2.5 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default WriteReflection
