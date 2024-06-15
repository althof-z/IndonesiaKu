import { useEffect, useState } from "react";
import { auth } from "../utils/firebase.config";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return { user };
}

export default useAuth;
