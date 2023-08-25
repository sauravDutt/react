
import { useState } from 'react';
import Header from './components/Header';
import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import './index.css';
import SignUp from './components/SignUp';


function App() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  if(login) {
    return (
      <div className="App">
      <Header setLogin={setLogin} setSignUp={setSignUp}/>
      <NavBar />
      <LogIn setSignUp={setSignUp} setLogin={setLogin}/>
      
      </div>
    );
  }
  if(signUp) {
    return (
      <div className="App">
      <Header setLogin={setLogin} setSignUp={setSignUp}/>
      <NavBar />
      <SignUp setLogin={setLogin}/>
      
      </div>
    );
  } else {
    return (
      <div className="App">
      <Header setLogin={setLogin} setSignUp={setSignUp}/>
      <NavBar />
      <MainAreaOne/>
      
      </div>
    );
  }

  
}

export default App;
