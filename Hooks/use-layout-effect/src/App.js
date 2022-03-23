import { useLayoutEffect, useEffect } from 'react';

function UseLayoutEffect() {

  // is called after the ui is loaded as well as the data from the api in response
  // it renders the entire ui as well as the data and is called then afterwards
  useEffect(()=> {
    console.log("UseEffect");
  }, []);

  // is the first to be called
  // is called once renders the entire ui first
  // is called before it displays data ex. an api response
  useLayoutEffect(()=> {
    console.log("UseLayoutEffect");
  }, []);

  return (
    <div>
    </div>
  );
}

export default UseLayoutEffect;
