
// import { useState } from 'react';
import Header from './components/Header';
// import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import './index.css';



function App() {
  // const [login, setLogin] = useState(0);

  return (
    <div className="App">
    <Header />
    <NavBar />
    <MainAreaOne/>
    {/* <LogIn /> */}
    </div>
  );
}

export default App;
