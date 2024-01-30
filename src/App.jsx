import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp'
import User from './components/pages/User';
import Chat from './components/pages/Chat'
import Home from './components/pages/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<SignIn/>}></Route>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
