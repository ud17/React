import { useRef, useState } from 'react'; 

function UserRef() {

  const [input, setInput] = useState("No Name");
  const inputRef = useRef(null);

  const ChangeName = () => {
    const newName = inputRef.current.value;
    setInput(newName);
    inputRef.current.focus();
    inputRef.current.value = "";
  }

  return (
    <div>
        {input}
        <input type="text" ref={inputRef}/>
        <input type="button" value="Change name" onClick={ChangeName}/>
    </div>
  );
}

export default UserRef;
