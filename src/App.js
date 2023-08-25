
import { useState } from 'react';
import Header from './components/Header';
import LogIn from './components/LogIn';
import MainAreaOne from './components/MainAreaOne';
import NavBar from './components/NavBar';
import './index.css';


function App() {
  const [login, setLogin] = useState(false);

  if(login) {
    return (
      <div className="App">
      <Header setLogin={setLogin} />
      <NavBar />
      <LogIn/>
      
      </div>
    );
  } else {
    return (
      <div className="App">
      <Header setLogin={setLogin}/>
      <NavBar />
      <MainAreaOne/>
      
      </div>
    );
  }

  
}

export default App;
