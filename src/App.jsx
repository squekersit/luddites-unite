import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <h1 style={{ 
        fontSize: '3.5rem', 
        marginBottom: '1rem',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        🚀 I Did It Booya!
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        marginBottom: '2rem',
        opacity: 0.9
      }}>
        Learning to deploy with Vercel!
      </p>

      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <p style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1.5rem' 
        }}>
          Click count: <strong>{count}</strong>
        </p>
        
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            backgroundColor: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          Click Me! 🎉
        </button>

        <button 
          onClick={() => setCount(0)}
          style={{
            marginLeft: '1rem',
            padding: '1rem 2rem',
            fontSize: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            border: '2px solid white',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
          }}
        >
          Reset
        </button>
      </div>

      <p style={{ 
        marginTop: '3rem', 
        opacity: 0.8,
        fontSize: '0.9rem'
      }}>
        ✅ Successfully built and deployed on Vercel!
      </p>
    </div>
  )
}

export default App