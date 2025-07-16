import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000";

// 👇 Instance globale unique
let socket;

export const useSocket = () => {
  const socketRef = useRef();

  useEffect(() => {
    if (!socket) {
      socket = io(SOCKET_URL, {
        transports: ["websocket"],
      });
    }

    socketRef.current = socket;

    return () => {
      // Pas de disconnect ici !
      // Car on veut garder la connexion persistente
    };
  }, []);

  return socketRef.current;
};
