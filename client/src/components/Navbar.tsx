import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#1a1a2e',
      color: 'white',
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Syllabus AI
      </Link>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Link to="/browse" style={{ color: 'white', textDecoration: 'none' }}>
          Browse
        </Link>
        
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
              Dashboard
            </Link>
            <span style={{ color: '#ccc' }}>
              {user?.firstName} {user?.lastName}
            </span>
            <button
              onClick={logout}
              style={{
                background: 'transparent',
                border: '1px solid white',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
