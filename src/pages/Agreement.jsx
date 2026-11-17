import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import CircleShape from '../components/CircleShape.jsx'
import TriangleShape from '../components/TriangleShape.jsx'
import './Agreement.css'

function Agreement({ agreements = [], onChange }) {
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)

  function updateLine(index, value) {
    setSaved(false)
    onChange?.(index, value)
  }

  function saveAgreement() {
    setSaved(true)
  }

  return (
    <main className="agreement-page">
      <CircleShape className="agreement-shape agreement-shape--circle" />
      <TriangleShape className="agreement-shape agreement-shape--triangle" />

      <div className="agreement-layout">
        <article className="agreement-card">
          <h1>Month 3 Team Agreement</h1>
          <ul>
            {agreements.map((line, index) => (
              <li key={index}>
                <input
                  value={line}
                  onChange={(event) => updateLine(index, event.target.value)}
                  aria-label={`Agreement ${index + 1}`}
                />
              </li>
            ))}
          </ul>
        </article>

        <div className="agreement-actions">
          <Button onClick={saveAgreement}>
            <svg className="agreement-save__icon" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12.5 9.2 17 19 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {saved ? 'Team agreement saved' : 'Save Team Agreement'}
          </Button>
          <Button onClick={() => navigate('/bridge')}>See agreements</Button>
        </div>
      </div>
    </main>
  )
}

export default Agreement
