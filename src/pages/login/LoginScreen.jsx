import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("A palavra-passe deve ter pelo menos oito caracteres.");
      return;
    }
    if (!email.endsWith("@isptec.co.ao")) {
      setError("O email deve ser do domínio @isptec.co.ao");
      return;
    }

    try {
      await login({ email, password });
      navigate("/");
    } catch (err) {
      setError("Erro durante o login. Verifique suas credenciais.");
      setTimeout(() => setError(""), 10000); // Limpa a mensagem de erro após 10 segundos
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Bem-vindo ao ISPMedia</h1>
          <p></p>
          <span>Não tem uma conta?</span>
          <Link to="/register">
            <button>Criar conta</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Palavra-passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </form>
          <div className="error-container">
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
