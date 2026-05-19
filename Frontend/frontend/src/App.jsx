import "./App.css"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from "./pages/feed"
import Navbar from "./Navbar"
function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
  )
}
export default App
