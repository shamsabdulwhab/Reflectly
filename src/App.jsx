import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import JoinGroup from './pages/JoinGroup.jsx'
import WriteReflection from './pages/WriteReflection.jsx'
import AIGuidance from './pages/AIGuidance.jsx'
import DiscussionBoard from './pages/DiscussionBoard.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinGroup />} />
        <Route path="/write" element={<WriteReflection />} />
        <Route path="/guidance" element={<AIGuidance />} />
        <Route path="/board" element={<DiscussionBoard />} />
      </Routes>
    </Router>
  )
}

export default App
