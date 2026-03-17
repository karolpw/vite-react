import React from "react";
import { useState } from "react";

function AuthForm({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const url = isLogin
      ? `${import.meta.env.LOCAL_API_URL}/auth/login`
      : `${import.meta.env.LOCAL_API_URL}/auth/register`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (isLogin && data.access_token) {
      localStorage.setItem("token", data.access_token);
      onLogin(data.access_token);
    } else if (!isLogin && response.ok) {
      setMessage("Pomyślnie zarejestrowano");
      setIsLogin(true);
    } else {
      setMessage(data.message || "Wystąpił błąd");
    }
  };

  return (
    <>
      <form className="loginForm">
        <h1>{isLogin ? "Zaloguj się" : "Zarejestruj się"}</h1>
        <label>E-mail</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Hasło</label>
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" className="formButton" onClick={handleSubmit}>
          {isLogin ? "Zaloguj się" : "Zarejestruj się"}
        </button>

        <button
          onClick={() => setIsLogin(!isLogin)}
          type="button"
          className="changeAuth"
        >
          {isLogin ? "Stwórz konto" : "Zaloguj się"}
        </button>
        {message && <p className="errorMessage">{message}</p>}
      </form>
    </>
  );
}

export default AuthForm;
