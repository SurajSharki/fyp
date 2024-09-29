import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  const [userType, setUserType] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const getUserInfo = async () => {
    try {
      const resp = await axios.get("http://localhost:8000/verifyAll", {
        withCredentials: true,
      });

      console.log(resp.data);
      if (resp.data.status === "ok") {
        setUserId(resp.data.id);
        setUserType(resp.data.usertype);
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <ApiContext.Provider
      value={{
        userId,
        userType,
        getUserInfo,
        loggedIn,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
