import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  // check if Online
  useEffect(() => {
    window.addEventListener("Offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("Online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //return boolean
  return onlineStatus;
};

export default useOnlineStatus;
