import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import './Bridge.css'

const months = [
  { id: 1, label: 'Month1', state: 'defined' },
  { id: 2, label: 'Month2', state: 'defined' },
  { id: 3, label: 'Month3', state: 'current' },
  { id: 4, label: 'Month4', state: 'upcoming' },
  { id: 5, label: 'Month5', state: 'upcoming' },
]

function Bridge() {
  const navigate = useNavigate()
  const location = useLocation()
  const agreement = location.state?.agreement || 'Name task owners'
  const [selectedMonth, setSelectedMonth] = useState(3)

  return (
    <main className="bridge-page">
      <h1>A bridge made of small agreements</h1>

      <section className="bridge" aria-label="Team agreements">
        <div className="bridge-label-row">
          <span />
          <p className="bridge-upcoming">Upcoming phases</p>
        </div>

        <div className="bridge-deck">
          {months.map((month) => {
            const monthBody = (
              <>
                <strong>{month.label}</strong>
                {month.state === 'upcoming' ? (
                  <span className="month-placeholder" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                ) : (
                  <span>Defined</span>
                )}
              </>
            )

            if (month.state === 'upcoming') {
              return (
                <button
                  className={`month month--${month.state}`}
                  key={month.id}
                  type="button"
                  onClick={() => navigate('/')}
                >
                  {monthBody}
                </button>
              )
            }

            const isSelected = selectedMonth === month.id

            return (
              <button
                className={`month month--${month.state}${isSelected ? ' month--selected' : ''}`}
                key={month.id}
                type="button"
                aria-pressed={isSelected}
                aria-current={month.state === 'current' ? 'true' : undefined}
                onClick={() => setSelectedMonth(month.id)}
              >
                {monthBody}
              </button>
            )
          })}
        </div>

        <div className="bridge-beam" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="bridge-agreements">
        <div className={`bridge-link bridge-link--month-${selectedMonth}`}>
          <span className="bridge-stem" aria-hidden="true" />
          <button
            className="agreement"
            type="button"
            onClick={() => navigate('/agreement')}
          >
            <span className="agreement-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <rect x="5" y="3.5" width="14" height="17" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <h2>Agreement</h2>
              <p>{agreement}</p>
            </div>
          </button>
        </div>
        </div>
      </section>

      <div className="bridge-nav">
        <Button onClick={() => navigate(-1)}>Back</Button>
        <Button variant="red" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </div>
    </main>
  )
}

export default Bridge
