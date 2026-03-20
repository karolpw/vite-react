import { useState } from "react";
import Header from "./components/header";
import GetPosts from "./components/get-posts";
import AuthForm from "./components/auth-form";
import AddPosts from "./components/add-post";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [showAuth, setShowAuth] = useState(false);
  const [addPost, setAddPost] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  if (addPost && token) {
    return (
      <>
        <Header
          token={token}
          onLogout={handleLogout}
          onAddPost={() => setAddPost(true)}
          onShowAuth={() => setShowAuth(true)}
        />
        <AddPosts onClose={() => setAddPost(false)}/>
      </>
    );
  }

  if (showAuth && !token) {
    return (
      <>
        <Header token={token} onShowAuth={() => setShowAuth(true)} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 60px)",
            background: "#F9FAFB",
          }}
        >
          <AuthForm
            onLogin={(t) => {
              setToken(t);
              setShowAuth(false);
            }}
            onClose={() => {
              setShowAuth(false)
            }}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <Header
        token={token}
        onLogout={handleLogout}
        onShowAuth={() => setShowAuth(true)}
        onAddPost={() => setAddPost(true)}
      />
      <main>
        <h1>Witaj na Blog.dev</h1>
        <GetPosts />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
