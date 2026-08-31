import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import '../styles/login.css';

type LoginPageProps = {
  onLogin?: () => void;
};

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="login-shell">
      <div className="login-card">
        <div className="login-content">
          <div
            className="login-brand non-selectable"
            onCopy={(event) => event.preventDefault()}
            onMouseDown={(event) => event.preventDefault()}
            onSelect={(event) => event.preventDefault()}
          >
            <div className="login-logo-lockup">
              <span className="login-logo">mclub</span>
              <span className="login-logo-tag">gym</span>
            </div>
            <p className="login-tagline">
              Clientes, membresias
              <br />e inventario.
            </p>
          </div>
          <form
            className="login-form"
            onSubmit={(event) => {
              event.preventDefault();
              onLogin?.();
            }}
          >
            <div className="login-field focus-within:ring-2 focus-within:ring-white/20">
              <input
                aria-label="Usuario"
                autoComplete="username"
                className="login-input"
                name="username"
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                value={username}
              />
              <div
                aria-hidden="true"
                className="login-field-display non-selectable"
              >
                {username.length === 0 ? (
                  <span className="text-[#5c5c5c]">usuario</span>
                ) : (
                  <span className="flex max-w-full overflow-hidden py-2 text-white">
                    {Array.from(username).map((character, index) => (
                      <motion.span
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0.92, y: 6 }}
                        key={`${character}-${index}`}
                        transition={{
                          duration: 0.26,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {character === ' ' ? '\u00a0' : character}
                      </motion.span>
                    ))}
                  </span>
                )}
              </div>
            </div>
            <div className="login-field focus-within:ring-2 focus-within:ring-white/20">
              <input
                aria-label="Contrasena"
                autoComplete="current-password"
                className="login-input"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                value={password}
              />
              <div
                aria-hidden="true"
                className="login-field-display non-selectable"
              >
                {password.length === 0 ? (
                  <span className="text-[#5c5c5c]">contrasena</span>
                ) : (
                  <span className="flex max-w-full overflow-hidden py-2 text-white">
                    {Array.from(password).map((_, index) => (
                      <motion.span
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0.92, y: 6 }}
                        key={`password-${index}`}
                        transition={{
                          duration: 0.26,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {'\u2022'}
                      </motion.span>
                    ))}
                  </span>
                )}
              </div>
            </div>
            <button
              aria-label="Ingresar"
              className="login-submit transition-transform hover:scale-105 focus:ring-2 focus:ring-white/35 focus:outline-none"
              type="submit"
            >
              <ArrowRight
                aria-hidden="true"
                className="login-submit-icon"
                strokeWidth={3}
              />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
