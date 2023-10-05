import { Routes, Route } from 'react-router-dom';
import FeedPage from './view/FeedPage'
import LandingPage from './view/LandingPage'
import { AuthProvider } from './contexts/Context';
import Settings from './components/settings/Settings';
import MyImages from './view/MyImages';
import SinglePost from './view/SinglePost';
import RightMenu from './components/RightMenu/RightMenu';

function App() {

  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/view/FeedPage" element={<FeedPage />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/view/MyImages" element={<MyImages />} />
        <Route path="/view/SinglePost" element={<SinglePost />} />  
        <Route path="/components/RightMenu/RightMenu" element={<RightMenu />} />  
          
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
