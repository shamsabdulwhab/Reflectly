import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import './AIGuidance.css'

const prompts = [
  {
    id: 1,
    question:
      'Think back on that experience, what is one challenge you overcame, and one challenge that remained unresolved',
    answer: 'One group member was not showing up',
  },
  {
    id: 2,
    question: 'How did you and your team respond to their absence?',
    answer: 'we stayed quite and not doing anything beside we confirm the teacher',
  },
  {
    id: 3,
    question: 'What made it difficult to speak directly with the team member about their absence?',
    answer: '',
  },
]

function AIGuidance() {
  const navigate = useNavigate()
  const [currentAnswer, setCurrentAnswer] = useState('')

  return (
    <main className="guidance-page">
      <div className="guidance-layout">
        <div className="guidance-top">
          <p className="guidance-banner">Write_with_AI / TEAM DEBRIEF</p>
          <button
            className="guidance-close"
            type="button"
            aria-label="Close"
            onClick={() => navigate('/write')}
          >
            ×
          </button>
        </div>

        <Card>
          {prompts.map((prompt) => (
            <div className="guidance-row" key={prompt.id}>
              <p className="guidance-question">
                <span className="guidance-spark" aria-hidden="true">
                  ✦
                </span>
                {prompt.question}
              </p>
              {prompt.answer ? (
                <p className="guidance-answer">Answer: {prompt.answer}</p>
              ) : (
                <label className="guidance-answer">
                  <span>Answer:</span>
                  <input
                    value={currentAnswer}
                    onChange={(event) => setCurrentAnswer(event.target.value)}
                    placeholder="Write your answer here..."
                  />
                </label>
              )}
            </div>
          ))}
        </Card>

        <Button wide type="button" onClick={() => navigate('/board')}>
          Upload this to team board
          <svg className="guidance-button__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 12h12M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </main>
  )
}

export default AIGuidance
