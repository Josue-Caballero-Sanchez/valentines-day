import './Envelope.css';
import Icon from '@mdi/react';
import { mdiEmailHeartOutline, mdiEmailOpenHeartOutline } from '@mdi/js';
import { useState } from 'react';

function Envelope({ onOpened }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleEnvelopeClick() {
    if(!isOpen) {
      setIsOpen(true);
    }
  }

  return (
    <>
      <div className={`envelope-container ${isOpen ? 'fly-away' : ''}`} onClick={handleEnvelopeClick} onAnimationEnd={isOpen ? onOpened : undefined}>
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
