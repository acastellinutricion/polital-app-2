import React, { useState, useEffect } from 'react'
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import JugadoraPanel from './pages/JugadoraPanel'
import './App.css'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('polital_session')
    if (saved) setSession(JSON.parse(saved))
  }, [])

  const handleLogin = (sessionData) => {
    localStorage.setItem('polital_session', JSON.stringify(sessionData))
    setSession(sessionData)
  }

  const handleLogout = () => {
    localStorage.removeItem('polital_session')
    setSession(null)
  }

  if (!session) return <Login onLogin={handleLogin} />
  if (session.role === 'admin') return <AdminPanel session={session} onLogout={handleLogout} />
  return <JugadoraPanel session={session} onLogout={handleLogout} />
}
