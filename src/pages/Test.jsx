import { useState } from 'react'

function Test() {
  const [text, setText] = useState('')
  const [textReflections, setTextReflections] = useState([])

  return (
    <div>
      <h1>React useState - Proof of Concept</h1>
      <p>
        This test shows why we need two states in Reflectly.
        One stores the current text, and the other stores
        the uploaded reflection.
      </p>

      <input
        type="text"
        placeholder="Enter your reflection"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
            <button type="button" onClick={() => setTextReflections([...textReflections, text])}>
        Upload
      </button>
      <p>Current text: {text}</p>

      <p>
        The reflection state only updates when I click Upload.
      </p>
     
        <li> <p> Uploaded reflection: {textReflections}</p></li>
    </div>
  )
}

export default Test