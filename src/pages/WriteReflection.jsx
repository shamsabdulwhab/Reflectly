import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import './WriteReflection.css'

const startingReflection = `This month, our group worked well together when building the raised beds. We shared ideas, helped each other with difficult tasks, and felt proud when we saw the results. I enjoyed working alongside my teammates and learning from them.

However, our responsibilities were not always clear. Sometimes, a few people took on more work while others waited for instructions. I also found it difficult to speak up when I felt the workload was uneven because I did not want to create tension.

I learned that being a good teammate means both helping others and communicating honestly. Next month, I would like us to divide tasks clearly, check that everyone understands their role, and make time for each person to share concerns. This could help us work more fairly and feel more involved.`

const guidedQuestions = [
  'What happened?',
  'How did teammates experience it?',
  'What could we change?',
]

function WriteReflection() {
  const navigate = useNavigate()
  const [reflection, setReflection] = useState(startingReflection)
  const editorRef = useRef(null)

  useEffect(() => {
    const box = editorRef.current
    if (!box) {
      return
    }
    box.style.height = 'auto'
    box.style.height = `${box.scrollHeight}px`
  }, [reflection])

  return (
    <main className="write-page">
      <svg className="write-shape write-shape--circle" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="#3b82f6" stroke="#111111" strokeWidth="3" />
      </svg>
      <svg className="write-shape write-shape--triangle" viewBox="0 0 100 108" aria-hidden="true">
        <polygon
          points="8,54 96,8 96,100"
          fill="#e94744"
          stroke="#111111"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>

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
            value={reflection}
            onChange={(event) => setReflection(event.target.value)}
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
          <Button wide type="button" onClick={() => navigate('/board')}>
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
