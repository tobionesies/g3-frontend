import { Routes, Route } from 'react-router-dom';
import FeedPage from './view/FeedPage'
import LandingPage from './view/LandingPage'
import { AuthProvider } from './contexts/Context';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view/FeedPage" element={<FeedPage />} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
