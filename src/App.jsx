import './App.css'
import Envelope from './Components/Envelope.jsx'
import Letter from './Components/Letter.jsx'
import YesPage from './Components/YesPage.jsx';
import heartOverHead from './assets/heart_over_head-removebg.png';
import angry from './assets/stick-meme-angry-removebg.png';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAngry, setIsAngry] = useState(false);
  const [clickYes, setClickYes] = useState(false);

  return (
    <>
      <main>
        {!clickYes && <img className="main-img" src={isAngry ? angry : heartOverHead} alt="person" />}
        {!isOpen && (
          <Envelope onOpened={() => setIsOpen(true)}/>
        )}
        {isOpen && !clickYes && <Letter onClickNo={() => setIsAngry(true)} onClickYes={() => setClickYes(true)} />}
        {clickYes && <YesPage />}
      </main>
    </>
  )
}

export default App
