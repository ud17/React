import { useState } from 'react';

const UseState = () => {

  const [ data, setData ] = useState("Udit");

  // handle data change using setData state method
  const handleChange = (event) => {
    let name = event.target.value;
    setData(name);
  }

  return (
    <div>
      {data}
      <input type="text" placeholder="Enter text..." onChange={handleChange}/>
    </div>
  );
}

export default UseState;
