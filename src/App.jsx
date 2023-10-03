import { Routes, Route } from 'react-router-dom';
import FeedPage from './view/FeedPage'
import LandingPage from './view/LandingPage'
import { AuthProvider } from './contexts/Context';
import ImageUpload from './components/ImageUpload';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view/FeedPage" element={<FeedPage />} />
        <Route path="image-upload" element={<ImageUpload />} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
