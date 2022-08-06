import React, { useState } from "react";
import api from "../Lib/lib.js";

export const UserContext = React.createContext(null);

export default function UserContextProvider(props) {
  // state variable to setUsername through all the app.
  const [user, setUser] = useState(null);

  // state to keep score data of the user
  const [score, setScore] = useState({
    first: "0",
    option1: "0",
    option2: "0",
    option3: "0",
    last: "0",
  });

  // state variable for the animation used on global animations and on buttons
  const [animation, setAnimation] = useState({
    initial: { opacity: 0, x: 1000 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -1000 },
  });

  const contextUser = {
    user,
    setUser,
    score,
    setScore,
    api,
    animation,
    setAnimation,
  };

  return (
    <UserContext.Provider value={contextUser}>
      {props.children}
    </UserContext.Provider>
  );
}
