import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

const SocketProvider = ({ children }) => {
  const socket = useMemo(() => io(process.env.REACT_APP_SOCKET_URL), []);

  return (
    <SocketContext.Provider value={socket}> {children} </SocketContext.Provider>
  );
};

export default SocketProvider;
