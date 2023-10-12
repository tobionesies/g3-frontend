import { Routes, Route } from "react-router-dom";
import FeedPage from "./view/FeedPage";
import LandingPage from "./view/LandingPage";
import {useAppContext} from './auth'
import Register from "./components/Register/Register";
//import RightMenu from "./components/RightMenu/RightMenu";
import { UserProvider } from "./contexts/UserContext";
import { PostProvider } from "./contexts/PostContext";

 
function App() {
  const {state} = useAppContext()
  const auth = ()=>{
    if(state.credential.isAuthenticated){
      return <FeedPage />
    }else{
      return <LandingPage />
    }
  }
  return (
        <UserProvider>
          <PostProvider>
            <Routes>
              <Route path="/" element={auth()} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </PostProvider>
        </UserProvider>
  );
}
 
export default App;
 