import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp'
import User from './components/pages/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<SignIn/>}></Route>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/user' element={<User/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
