import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <section style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Welcome to Syllabus AI
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
          Your one-stop platform for educational materials with AI-powered summaries
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link
            to="/browse"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
            }}
          >
            Browse Materials
          </Link>
          <Link
            to="/register"
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
            }}
          >
            Get Started
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h3>📚 Organized Materials</h3>
            <p>Browse materials organized by institution, course, and subject.</p>
          </div>
          <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h3>🤖 AI Summaries</h3>
            <p>Get AI-generated summaries of study materials to save time.</p>
          </div>
          <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
            <h3>📥 Easy Downloads</h3>
            <p>Download PDFs, presentations, and documents with one click.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
