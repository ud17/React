import {useRef} from 'react'
import Button from './Button';

function UseImperativeHandle() {

  const buttonRef = useRef(null);

  const HandleChange = () => {
    buttonRef.current.alterToggle();
  }

  return (
    <div>
      <input type="button" value="Parent Button" onClick={HandleChange} />
      <Button ref={buttonRef}/>
    </div>
  );
}

export default UseImperativeHandle;
