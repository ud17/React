import { useState, useMemo, useEffect} from 'react';
import axios from 'axios';

function UseMemo() {
  const [title, setTitle] = useState("No Title");
  const [text, showText] = useState(false);

  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      setTitle(response.data[0].title)
    })
  } , [])

  const getTitle = (title) => {
    console.log('triggered getTitle() function');
    return title;
  }

  // 1st param will return the getTitle function
  // 2nd param is the dependent array
  // which will contain states on which the memo function will be triggered
  const getTitledName = useMemo(()=> getTitle(title) , [title])

  return (
    <div>
      {getTitledName}
      <br />
      <input type="button" value="Toggle" onClick={()=> {
        showText(!text);
      }}/>
      {text && <p>text</p>}
    </div>
  );
}

export default UseMemo;
