import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DiscussionBoard.css'

const startingNotes = [
  {
    id: 1,
    topic: 'Shared effort',
    text: 'This month, our group worked well together when building the raised beds. We shared ideas, helped each other with difficult tasks...',
    votes: 2,
  },
  {
    id: 2,
    topic: 'Unclear responsibilities',
    text: 'Our responsibilities were not always clear. Sometimes, a few people took on more work while others waited for instructions. I also found it difficult to speak up when ...',
    votes: 2,
  },
  {
    id: 3,
    topic: 'Clear task owners',
    text: 'A few people took on more work while others waited for instructions. I also found it difficult to speak up when ...',
    votes: 5,
  },
  {
    id: 4,
    topic: 'Uneven workload',
    text: 'Our responsibilities were not always clear. Sometimes, a few people took on more work while others waited for instructions. I also found it difficult to speak up when ...',
    votes: 4,
  },
  {
    id: 5,
    topic: 'Speaking up',
    text: 'Our responsibilities were not always clear. Sometimes, a few people took on more work while others waited for instructions. I also found it difficult to speak up when ...',
    votes: 1,
  },
]
function DiscussionBoard({ savedReflections = [] }) {
  const navigate = useNavigate()
  const [notes, setNotes] = useState(startingNotes)

  const chosenNote = notes.reduce((best, note) => {
    if (note.votes > best.votes) {
      return note
    }
    return best
  }, notes[0])

  function changeVote(id, amount) {
    setNotes((currentNotes) =>
      currentNotes.map((note) => {
        if (note.id !== id) {
          return note
        }
        return { ...note, votes: Math.max(0, note.votes + amount) }
      }),
    )
  }

  return (
    <main className="board-page">
      <svg className="board-shape board-shape--circle" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="#3b82f6" stroke="#111111" strokeWidth="3" />
      </svg>
      <button
        className="board-close"
        type="button"
        aria-label="Close"
        onClick={() => navigate('/write')}
      >
        <svg viewBox="0 0 100 108" aria-hidden="true">
          <polygon
            points="8,54 96,8 96,100"
            fill="#e94744"
            stroke="#111111"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path d="M62 38l22 24M84 38L62 62" fill="none" stroke="#111111" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </button>

      <div className="board-layout">
        <div className="board-notes">
          {notes.map((note) => (
            <article className="note" key={note.id}>
              <p>{note.text}</p>
              <div className="note-votes">
                <button type="button" aria-label="Remove a vote" onClick={() => changeVote(note.id, -1)}>
                  −
                </button>
                <span>{note.votes}</span>
                <button type="button" aria-label="Add a vote" onClick={() => changeVote(note.id, 1)}>
                  +
                </button>
              </div>
            </article>
          ))}
        </div>

        <article className="chosen-note">
          <h1>Voted for Discussion</h1>
          <p className="chosen-note__topic">
            {chosenNote.topic} — {chosenNote.votes} votes
          </p>
          <p>{chosenNote.text}</p>
          <button
            className="chosen-note__next"
            type="button"
            aria-label="Start again"
            onClick={() => navigate('/')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 18 18 6M10 6h8v8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p>Saved reflections</p>
          <ul>
            {savedReflections.map((reflection, index) => (
              <li key={index}>{reflection}</li>
            ))}
          </ul>
        </article>
      </div>
    </main>
  )
}

export default DiscussionBoard
