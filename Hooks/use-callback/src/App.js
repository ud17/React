import { useState, useCallback, useEffect} from 'react';
import axios from 'axios';
import Child from './Child';

function UseCallback() {
  const [title, setTitle] = useState("No Title");
  const [text, showText] = useState(false);

  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setTitle(response.data[0].title)
    })
  } , [])

  const getTitle = useCallback((name) => {
    return title + name;
  }, [title]);

  return (
    <div>
      <Child returnTitle={getTitle}/>
      <br />
      <input type="button" value="Toggle" onClick={()=> {
        showText(!text);
      }}/>
      {text && <p>text</p>}
    </div>
  );
}

export default UseCallback;
