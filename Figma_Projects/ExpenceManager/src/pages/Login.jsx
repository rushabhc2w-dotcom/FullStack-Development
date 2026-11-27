import { useState } from "react";
import { User, Lock } from "lucide-react";
import "../styles/Login.css";

function Login({ onLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userName.trim() || !password.trim()) {
      setError("Please enter username and password");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    setError("");
    onLogin(userName.trim(), remember);
  };

  return (
    <div className="login-page">
      <div className="login-brand">
        <div className="brand-icon">
          <img src="/images/wallet.png" alt="Wallet" />
        </div>

        <h1>Expense Manager</h1>

        <p>Empowering your academic financial journey.</p>
      </div>

      <div className="login-card">
        <h2>Welcome back</h2>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>

            <div className="input-wrapper">
              <User size={18} />

              <input
                id="username"
                type="text"
                placeholder="John Doe"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password">Password</label>

              <button
                type="button"
                className="text-button"
                onClick={() => alert("Password recovery coming soon")}
              >
                Forgot Password?
              </button>
            </div>

            <div className="input-wrapper">
              <Lock size={18} />

              <input
                id="password"
                type="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <label className="remember-device">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember this device
          </label>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        <div className="login-divider">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <button
          className="google-button"
          onClick={() => alert("Google authentication coming soon")}
        >
          <img src="/images/google.png" alt="Google" className="google-icon" />
          Sign in with Google
        </button>
      </div>

      <p className="signup-text">
        Don't have an account?{" "}
        <button
          className="signUp-text-button"
          onClick={() => alert("Registration coming soon")}
        >
          Sign Up for Free
        </button>
      </p>
    </div>
  );
}

export default Login;
