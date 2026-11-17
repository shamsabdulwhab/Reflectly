import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import JoinGroup from './pages/JoinGroup.jsx'
import WriteReflection from './pages/WriteReflection.jsx'
import AIGuidance from './pages/AIGuidance.jsx'
import DiscussionBoard from './pages/DiscussionBoard.jsx'
import Bridge from './pages/Bridge.jsx'
import Agreement from './pages/Agreement.jsx'
import ReflectionPOC from './ReflectionPOC.jsx'
import Test from './pages/Test.jsx'



const startingAgreements = [
  'Clear task owner',
  'Meeting facilitation rotates weekly: each person leads once',
  'Friday 10-minute check-in: flag blockers before weekend work',
  'Task updates due by Thursday so everyone knows their part',
  'If someone misses two check-ins, we ask for a plan before next workday',
]

function App() {
  const [textReflections, setTextReflections] = useState([])
  const [agreements, setAgreements] = useState(startingAgreements)

  function uploadReflection(text) {
    setTextReflections((currentReflections) => [...currentReflections, text])
  }

  function updateAgreement(index, value) {
    setAgreements((currentAgreements) =>
      currentAgreements.map((line, lineIndex) => (lineIndex === index ? value : line)),
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinGroup />} />
        <Route path="/write" element={<WriteReflection onUpload={uploadReflection} />} />
        <Route path="/reflection-poc" element={<ReflectionPOC />} />
        <Route path="/guidance" element={<AIGuidance />} />
        <Route path="/board" element={<DiscussionBoard savedReflections={textReflections} />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route
          path="/agreement"
          element={<Agreement agreements={agreements} onChange={updateAgreement} />}
        />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App
