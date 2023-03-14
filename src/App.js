import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import Signup from './SignUp/Signup';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='signin' element={<Signup/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='home' element={<Home/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
