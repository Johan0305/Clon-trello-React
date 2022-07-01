import { useEffect } from "react";
import { useState } from "react";
import io from "socket.io-client";

export const useSocket = (url) => {
  const [socket, setSocket] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return false;
    }

    const newSocket = io.connect(url, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      query: {
        Authorization: `Bearer ${token}`,
      },
    });

    setSocket(newSocket);
  }, [token, url]);
  return socket;
};

export default useSocket;
