
import { useState } from 'react';
import Header from './components/Header';
import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import './index.css';
import SignUp from './components/SignUp';


function App() {
  const [loginBtn, setLoginBtn] = useState(false);
  const [signUpBtn, setSignUpBtn] = useState(false);

  if(loginBtn) {
    return (
      <div className="App">
      <Header setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn}/>
      <NavBar />
      <LogIn setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn}/>
      
      </div>
    );
  }
  if(signUpBtn) {
    return (
      <div className="App">
      <Header setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn}/>
      <NavBar />
      <SignUp setLoginBtn={setLoginBtn}/>
      
      </div>
    );
  } else {
    return (
      <div className="App">
      <Header setLoginBtn={setLoginBtn} setSignUpBtn={setSignUpBtn}/>
      <NavBar />
      <MainAreaOne/>
      
      </div>
    );
  }

  
}

export default App;
