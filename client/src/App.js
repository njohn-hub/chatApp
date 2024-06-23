import Chat from "./Components/Chat/Chat";
import List from "./Components/List/List";
import Detail from "./Components/Detail/Detail";
import Login from "./Components/Login/Login";
import Notification from "./Components/Notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

function App() {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid)
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);


  if(isLoading) return <div className="loading">Loading</div>

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;
