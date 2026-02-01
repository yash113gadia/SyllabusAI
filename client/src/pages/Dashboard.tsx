import { useAuth } from '../context/AuthContext';

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Dashboard</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Welcome back, {user?.firstName}!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ color: '#2196F3', marginBottom: '0.5rem' }}>📚 My Materials</h3>
          <p style={{ color: '#666' }}>View and manage your uploaded materials</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}>0</p>
        </div>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>📥 Downloads</h3>
          <p style={{ color: '#666' }}>Total downloads of your materials</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}>0</p>
        </div>

        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ color: '#FF9800', marginBottom: '0.5rem' }}>👁️ Views</h3>
          <p style={{ color: '#666' }}>Total views of your materials</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}>0</p>
        </div>
      </div>

      <section style={{ marginTop: '3rem' }}>
        <h2>Profile Information</h2>
        <div style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginTop: '1rem',
        }}>
          <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
          <p><strong>Member since:</strong> {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
        </div>
      </section>
    </div>
  );
}
