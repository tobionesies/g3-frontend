import { Routes, Route } from 'react-router-dom';
import FeedPage from './view/FeedPage'
import LandingPage from './view/LandingPage'
import { AuthProvider } from './contexts/Context';
import Settings from './view/Settings';
import MyImages from './view/MyImages';
import SinglePost from './view/SinglePost';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view/FeedPage" element={<FeedPage />} />
        <Route path="/view/Settings" element={<Settings />} />
        <Route path="/view/MyImages" element={<MyImages />} />
        <Route path="/view/SinglePost" element={<SinglePost />} />    
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
