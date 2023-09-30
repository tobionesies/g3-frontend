import { Routes, Route } from 'react-router-dom';
import FeedPage from './view/FeedPage'
import LandingPage from './view/LandingPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/view/FeedPage" element={<FeedPage />} />
    </Routes>
      
      
      
      
    </>
  )
}

export default App
