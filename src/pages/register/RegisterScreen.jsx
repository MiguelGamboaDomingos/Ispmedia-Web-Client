import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.scss";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return email.endsWith("@isptec.co.ao");
  };

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9_]{5,}$/;
    return regex.test(username);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("O email deve ser do domínio @isptec.co.ao");
      return;
    }
    if (!validateUsername(username)) {
      setError("O nome de utilizador deve ter pelo menos cinco caracteres e pode conter apenas letras, números e underscores.");
      return;
    }
    if (password.length < 8) {
      setError("A palavra-passe deve ter pelo menos oito caracteres.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
        fullName,
      });
      alert("Registrado com sucesso!");
      navigate("/login");
    } catch (err) {
      setError("Erro ao registrar. Tente novamente.");
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Estivemos à tua espera</h1>
          <p></p>
          <span>Já tem uma conta?</span>
          <Link to="/login">
            <button>Entrar</button>
          </Link>
        </div>
        <div className="right">
          <h1>Criar Conta</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nome de utilizador"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Palavra-passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <input
              type="text"
              placeholder="Nome Completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <button type="submit">Criar conta</button>
          </form>
          <div className="error-container">
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
