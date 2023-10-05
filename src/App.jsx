import { Routes, Route } from 'react-router-dom';
import FeedPage from './view/FeedPage'
import LandingPage from './view/LandingPage'
import { AuthProvider } from './contexts/Context';
import Settingspage from './components/Settings/settings';
import Register from './components/Register/Register';
import RightMenu from './components/RightMenu/RightMenu';
import UploadImage from './view/UploadImage';
import MyImages from './view/MyImages';
import SinglePost from './view/SinglePost';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view/FeedPage" element={<FeedPage />} />
        <Route path="/settings" element={<Settingspage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/view/UploadImage" element={<UploadImage />} />
        <Route path="/view/MyImages" element={<MyImages />} />
        <Route path="/view/SinglePost" element={<SinglePost />} />
        
      </Routes>/
    </AuthProvider>
    </>
  )
}

export default App
