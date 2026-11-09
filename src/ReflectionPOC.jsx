import { useState } from 'react'

function ReflectionPOC() {
  const [reflectionText, setReflectionText] = useState('')
  const [savedReflections, setSavedReflections] = useState([])

  function saveReflection() {
    if (reflectionText.trim() === '') return
  
    setSavedReflections([
      ...savedReflections,
      reflectionText
    ])
  
    setReflectionText('')
  }
  return (
    <div>
      <h1>Reflection POC</h1>
      <textarea
      value={reflectionText}
      onChange={event => setReflectionText(event.target.value)}
      placeholder="Write a reflection"
      aria-label="Write a reflection"
      />
      <p>
        {reflectionText}
       <ul>{savedReflections.map((reflection, index) => (
        <li key={index}>{reflection}</li>
       ))}</ul>  
      </p>
      <button onClick={saveReflection}>
        Save Reflection
      </button>
    </div>
  )
}

export default ReflectionPOC