import { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext();
function UseContext() {
  const [username, setUsername] =useState("");

  return (
    <AppContext.Provider value={{username, setUsername}}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default UseContext;
