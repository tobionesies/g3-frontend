import { Routes, Route } from 'react-router-dom';
import FeedPage from './view/FeedPage'
import LandingPage from './view/LandingPage'
import { AuthProvider } from './contexts/Context';
import Settingspage from './components/Settings/settings';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view/FeedPage" element={<FeedPage />} />
        <Route path="/settings" element={<Settingspage />} />
      </Routes>/
    </AuthProvider>
    </>
  )
}

export default App
