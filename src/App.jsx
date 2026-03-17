import { useState } from "react";
import GetPosts from "./components/get-posts";
import AuthForm from "./components/auth-form";
import AddPosts from "./components/add-post";

import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showAuth, setShowAuth] = useState(false);
  const [addPost, setAddPost] = useState(false);

  if(addPost && token){
    return (
      <>
        <AddPosts/>
        <button onClick={() => setAddPost(false)}>wróć</button>
      </>
    )
  }

  if (showAuth && !token) {
    return (
      <>
        <AuthForm
          onLogin={(t) => {
            setToken(t);
            setShowAuth(false);
          }}
        />
        <button
          onClick={() => {
            setShowAuth(false);
          }}
        >
          Wróć
        </button>
      </>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      <header>
        <h2>Blog.dev</h2>
        {token ? (
          <>
            <button onClick={() => setAddPost(true)}>Dodaj post</button>
            <button onClick={handleLogout}>Wyloguj</button>
          </>
        ) : (
          <button onClick={() => setShowAuth(true)}>Zaloguj się</button>
        )}
      </header>
      <main>
        <h1>Witaj na Blog.dev</h1>
        <GetPosts />
        {!token && showAuth && <AuthForm onLogin={setToken} />}
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
