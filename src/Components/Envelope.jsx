import './Envelope.css'
import Icon from '@mdi/react';
import { mdiEmailHeartOutline, mdiEmailOpenHeartOutline } from '@mdi/js';
import heartOverHead from '../assets/heart_over_head-removebg.png';
import { useState } from 'react';

function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  function handleEnvelopeClick() {
    if(!isOpen) {
      setIsOpen(true);
    }
  }

  return (
    <>
      <img className="main-img" src={heartOverHead} alt="" />
      <div className={`envelope-container ${isOpen ? 'fly-away' : ''}`} onClick={handleEnvelopeClick}>
        <Icon 
          className="envelope" 
          path={isOpen ? mdiEmailOpenHeartOutline : mdiEmailHeartOutline} 
          size={25} 
        />
        <p className="envelope-text">To: my love</p>
      </div>
    </>
  )
}

export default Envelope
