import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import TextField from '../components/TextField.jsx'
import './JoinGroup.css'

function JoinGroup() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [groupCode, setGroupCode] = useState('')
  function handleSubmit(event) {
    event.preventDefault()
    navigate('/write')
  }

  return (
    <main className="join-page">
      <svg
        className="join-shape join-shape--triangle"
        viewBox="0 0 100 108"
        aria-hidden="true"
      >
        <polygon
          points="8,54 96,8 96,100"
          fill="#e94744"
          stroke="#111111"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="join-shape join-shape--circle"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="46" fill="#3b82f6" stroke="#111111" strokeWidth="3" />
      </svg>

      <div className="join-layout">
        <header className="join-intro">
          <h1>Join Group</h1>
          <p>Bring your perspective. Write your reflection</p>
        </header>

        <Card>
          <form className="join-form" onSubmit={handleSubmit}>
            <div className="join-form__fields">
              <TextField
                id="student-name"
                label="Name"
                placeholder="Write your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                id="group-code"
                label="Group code"
                placeholder="Grow-314"
                value={groupCode}
                onChange={(event) => setGroupCode(event.target.value)}
              />
            </div>

            <div className="join-form__footer">
              <p className="join-form__link">Shared reflection link</p>
              <Button type="submit">
                Join
                <svg className="join-button__icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M5.5 19.5c.8-3.2 3-4.8 6.5-4.8s5.7 1.6 6.5 4.8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  )
}

export default JoinGroup
