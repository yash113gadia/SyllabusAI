export function Browse() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Browse Materials</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Find study materials organized by institution, course, and subject
      </p>

      {/* Search Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search materials..."
          style={{
            width: '100%',
            padding: '1rem',
            fontSize: '1rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        />
      </div>

      {/* Filters */}
      <div style={{ 
        display: 'flex', 
        gap: '1rem', 
        marginBottom: '2rem',
        flexWrap: 'wrap',
      }}>
        <select style={{
          padding: '0.75rem',
          borderRadius: '4px',
          border: '1px solid #ddd',
          minWidth: '200px',
        }}>
          <option value="">All Institutions</option>
        </select>
        
        <select style={{
          padding: '0.75rem',
          borderRadius: '4px',
          border: '1px solid #ddd',
          minWidth: '200px',
        }}>
          <option value="">All Courses</option>
        </select>
        
        <select style={{
          padding: '0.75rem',
          borderRadius: '4px',
          border: '1px solid #ddd',
          minWidth: '200px',
        }}>
          <option value="">All Subjects</option>
        </select>
      </div>

      {/* Materials Grid - Placeholder */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        <div style={{
          padding: '2rem',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          textAlign: 'center',
          color: '#666',
        }}>
          <p>No materials available yet.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Materials will appear here once uploaded.
          </p>
        </div>
      </div>
    </div>
  );
}
