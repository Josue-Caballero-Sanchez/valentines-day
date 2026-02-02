import './Letter.css';
import Icon from '@mdi/react';
import { mdiHeartMultiple } from '@mdi/js';
import { useState } from 'react';

function Letter({ onClickNo, onClickYes }) {
  const [showMessage, setShowMessage] = useState(false);

  function HandleNoClick() {
    setShowMessage(true);
    onClickNo();
  }

  return (
    <div className={showMessage ? "letter-container-no-animation" : "letter-container"}>
      <p>Will you be my Valentine?</p>
      <Icon className="heart-icon" path={mdiHeartMultiple} size={15} />
      <div className="button-container">
        <button onClick={onClickYes}>Yes</button>
        {showMessage ? <p>Sorry my love but you can't say no &#128544;</p> : <button onClick={HandleNoClick}>No</button>}
      </div>
    </div>
  )
}

export default Letter
