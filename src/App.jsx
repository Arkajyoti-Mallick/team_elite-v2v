import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  { id: 'home', label: 'Home', emoji: '🏠' },
  { id: 'dashboard', label: 'Dashboard', emoji: '📊' },
  { id: 'sos', label: 'SOS', emoji: '🆘' },
  { id: 'route', label: 'Safe Route', emoji: '🗺️' },
  { id: 'report', label: 'Report', emoji: '🚨' },
  { id: 'ai', label: 'AI Assistant', emoji: '🤖' },
  { id: 'nearby', label: 'Nearby Help', emoji: '🩹' },
  { id: 'profile', label: 'Profile', emoji: '👤' },
  { id: 'about', label: 'About', emoji: '💡' },
]

const dashboardCards = [
  { id: 'sos', title: 'Emergency SOS', subtitle: 'Instant help with live location' },
  { id: 'route', title: 'Safe Route', subtitle: 'Choose a safer travel path' },
  { id: 'report', title: 'Report Incident', subtitle: 'Share concerns with the community' },
  { id: 'ai', title: 'AI Assistant', subtitle: 'Get calm guidance in real time' },
]

const aiSuggestions = ['I feel unsafe walking alone', 'Someone is following me', 'How do I report harassment?']

function App() {
  const [activeView, setActiveView] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [authMessage, setAuthMessage] = useState('')
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '' })
  const [sosStatus, setSosStatus] = useState({ loading: false, message: 'Ready to send help.' })
  const [routeForm, setRouteForm] = useState({ from: '', to: '' })
  const [routeResult, setRouteResult] = useState(null)
  const [incidentForm, setIncidentForm] = useState({ type: 'Harassment', location: '', description: '', date: '' })
  const [incidentSuccess, setIncidentSuccess] = useState(false)
  const [aiInput, setAiInput] = useState('')
  const [aiMessages, setAiMessages] = useState([
    { sender: 'AI', text: 'Hello! I can guide you through a safety concern and help you reach the right support.' },
  ])
  const [profile, setProfile] = useState({ name: '', phone: '', bloodGroup: '', emergencyContact: '' })

  useEffect(() => {
    const storedUser = window.localStorage.getItem('safesphere-user')
    const storedProfile = window.localStorage.getItem('safesphere-profile')

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      setIsLoggedIn(true)
      setActiveView('dashboard')
    }

    if (storedProfile) {
      setProfile(JSON.parse(storedProfile))
    }
  }, [])

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('safesphere-user', JSON.stringify(user))
    } else {
      window.localStorage.removeItem('safesphere-user')
    }
  }, [user])

  useEffect(() => {
    window.localStorage.setItem('safesphere-profile', JSON.stringify(profile))
  }, [profile])

  const handleLogin = (event) => {
    event.preventDefault()

    if (!loginForm.email || !loginForm.password) {
      setAuthMessage('Please enter both email and password.')
      return
    }

    const demoUser = {
      name: 'Asha Rao',
      email: loginForm.email,
    }

    setUser(demoUser)
    setIsLoggedIn(true)
    setProfile((current) => ({ ...current, name: demoUser.name }))
    setActiveView('dashboard')
    setAuthMessage(`Welcome back, ${demoUser.name}!`)
  }

  const handleSignup = (event) => {
    event.preventDefault()

    if (!signupForm.name || !signupForm.email || !signupForm.password) {
      setAuthMessage('Please fill in your name, email, and password.')
      return
    }

    const demoUser = {
      name: signupForm.name,
      email: signupForm.email,
    }

    setUser(demoUser)
    setIsLoggedIn(true)
    setProfile((current) => ({ ...current, name: demoUser.name }))
    setActiveView('dashboard')
    setAuthMessage(`Account ready for ${demoUser.name}.`)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    setActiveView('home')
    setAuthMessage('You are signed out.')
  }

  const handleSos = () => {
    setSosStatus({ loading: true, message: 'Finding your live location…' })

    if (!navigator.geolocation) {
      setSosStatus({ loading: false, message: 'Geolocation is not supported in this browser.' })
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSosStatus({
          loading: false,
          message: `SOS alert prepared. Latitude ${position.coords.latitude.toFixed(3)}, Longitude ${position.coords.longitude.toFixed(3)}.`,
        })
      },
      () => {
        setSosStatus({ loading: false, message: 'Location access was blocked. Please allow it to share your position.' })
      }
    )
  }

  const handleRoute = (event) => {
    event.preventDefault()

    if (!routeForm.from || !routeForm.to) {
      setRouteResult({ title: 'Missing details', description: 'Please enter both a start and destination.' })
      return
    }

    setRouteResult({
      title: 'Safest path found',
      description: `A well-lit route from ${routeForm.from} to ${routeForm.to} is now recommended with nearby police and hospital access.`,
    })
  }

  const handleIncident = (event) => {
    event.preventDefault()
    setIncidentSuccess(true)
    setIncidentForm({ type: 'Harassment', location: '', description: '', date: '' })
  }

  const sendAiMessage = () => {
    if (!aiInput.trim()) return

    const preview = aiInput.trim()
    const reply = preview.toLowerCase().includes('follow')
      ? 'Move to a public, well-lit place and contact a trusted person immediately.'
      : preview.toLowerCase().includes('emergency')
        ? 'Use the SOS button and share your location with your trusted circle.'
        : 'I can help with immediate safety steps, reporting, and nearby support options.'

    setAiMessages((current) => [...current, { sender: 'You', text: preview }, { sender: 'AI', text: reply }])
    setAiInput('')
  }

  const saveProfile = () => {
    setAuthMessage('Profile saved locally for this demo session.')
  }

  const renderView = () => {
    if (activeView === 'dashboard') {
      return (
        <section className="view-card">
          <div className="section-heading">
            <p className="eyebrow">SafeSphere control center</p>
            <h2>Welcome back{user?.name ? `, ${user.name}` : ''}</h2>
            <p>Your safety tools are ready in one place.</p>
          </div>

          <div className="card-grid">
            {dashboardCards.map((card) => (
              <button key={card.id} className="dashboard-card" onClick={() => setActiveView(card.id)}>
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </button>
            ))}
          </div>

          <div className="hero-panel compact">
            <h3>Live safety summary</h3>
            <ul>
              <li>Trusted contacts ready</li>
              <li>Safe route suggestions available</li>
              <li>AI guidance is on standby</li>
            </ul>
          </div>
        </section>
      )
    }

    if (activeView === 'sos') {
      return (
        <section className="view-card">
          <div className="section-heading">
            <p className="eyebrow">Emergency tools</p>
            <h2>One-tap SOS support</h2>
            <p>Share your location quickly and alert your trusted circle.</p>
          </div>

          <div className="sos-panel">
            <button className="sos-button" onClick={handleSos} disabled={sosStatus.loading}>
              {sosStatus.loading ? 'Preparing…' : 'SOS'}
            </button>
            <div className="status-box">
              <h3>Current status</h3>
              <p>{sosStatus.message}</p>
            </div>
          </div>
        </section>
      )
    }

    if (activeView === 'route') {
      return (
        <section className="view-card">
          <div className="section-heading">
            <p className="eyebrow">Safe navigation</p>
            <h2>Find a safer route</h2>
            <p>Plan a brighter path with nearby support landmarks.</p>
          </div>

          <form className="stack-form" onSubmit={handleRoute}>
            <input value={routeForm.from} onChange={(event) => setRouteForm({ ...routeForm, from: event.target.value })} placeholder="Current location" />
            <input value={routeForm.to} onChange={(event) => setRouteForm({ ...routeForm, to: event.target.value })} placeholder="Destination" />
            <button className="primary-btn" type="submit">Search route</button>
          </form>

          {routeResult && (
            <div className="result-card">
              <h3>{routeResult.title}</h3>
              <p>{routeResult.description}</p>
            </div>
          )}
        </section>
      )
    }

    if (activeView === 'report') {
      return (
        <section className="view-card">
          <div className="section-heading">
            <p className="eyebrow">Community safety</p>
            <h2>Report an incident</h2>
            <p>Keep your neighborhood informed and safer for everyone.</p>
          </div>

          <form className="stack-form" onSubmit={handleIncident}>
            <select value={incidentForm.type} onChange={(event) => setIncidentForm({ ...incidentForm, type: event.target.value })}>
              <option>Harassment</option>
              <option>Stalking</option>
              <option>Theft</option>
              <option>Unsafe Area</option>
            </select>
            <input value={incidentForm.location} onChange={(event) => setIncidentForm({ ...incidentForm, location: event.target.value })} placeholder="Location" />
            <input value={incidentForm.date} type="date" onChange={(event) => setIncidentForm({ ...incidentForm, date: event.target.value })} />
            <textarea value={incidentForm.description} onChange={(event) => setIncidentForm({ ...incidentForm, description: event.target.value })} placeholder="Describe what happened" rows="4" />
            <button className="primary-btn" type="submit">Submit report</button>
          </form>

          {incidentSuccess && <div className="result-card"><h3>Report submitted</h3><p>Your update has been saved to the local demo timeline.</p></div>}
        </section>
      )
    }

    if (activeView === 'ai') {
      return (
        <section className="view-card">
          <div className="section-heading">
            <p className="eyebrow">AI guidance</p>
            <h2>SafeSphere assistant</h2>
            <p>Ask calm, practical questions and get fast support steps.</p>
          </div>

          <div className="ai-box">
            <div className="ai-messages">
              {aiMessages.map((message, index) => (
                <div key={`${message.sender}-${index}`} className={`bubble ${message.sender === 'You' ? 'user' : 'ai'}`}>
                  <strong>{message.sender}</strong>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>

            <div className="chip-row">
              {aiSuggestions.map((prompt) => (
                <button key={prompt} className="chip" onClick={() => setAiInput(prompt)}>{prompt}</button>
              ))}
            </div>

            <div className="ai-input-row">
              <input value={aiInput} onChange={(event) => setAiInput(event.target.value)} placeholder="Type a safety concern" />
              <button className="primary-btn" onClick={sendAiMessage}>Send</button>
            </div>
          </div>
        </section>
      )
    }

    if (activeView === 'nearby') {
      return (
        <section className="view-card">
          <div className="section-heading">
            <p className="eyebrow">Support nearby</p>
            <h2>Nearby help center</h2>
            <p>Find emergency services and helplines quickly.</p>
          </div>

          <div className="card-grid">
            {[
              ['Police', '100 / 112'],
              ['Women Helpline', '181'],
              ['Ambulance', '108'],
              ['Safe Shelter', 'Open now'],
            ].map(([title, detail]) => (
              <div key={title} className="dashboard-card support-card">
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </section>
      )
    }

    if (activeView === 'profile') {
      return (
        <section className="view-card">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>Your safety profile</h2>
            <p>Keep emergency details ready for fast action.</p>
          </div>

          <div className="stack-form">
            <input value={profile.name} onChange={(event) => setProfile({ ...profile, name: event.target.value })} placeholder="Full name" />
            <input value={profile.phone} onChange={(event) => setProfile({ ...profile, phone: event.target.value })} placeholder="Phone number" />
            <input value={profile.bloodGroup} onChange={(event) => setProfile({ ...profile, bloodGroup: event.target.value })} placeholder="Blood group" />
            <input value={profile.emergencyContact} onChange={(event) => setProfile({ ...profile, emergencyContact: event.target.value })} placeholder="Emergency contact" />
            <button className="primary-btn" onClick={saveProfile}>Save profile</button>
          </div>
        </section>
      )
    }

    if (activeView === 'about') {
      return (
        <section className="view-card">
          <div className="section-heading">
            <p className="eyebrow">About SafeSphere</p>
            <h2>Built for peace of mind</h2>
            <p>SafeSphere blends safety tools, instant support, and smart guidance into one calm experience.</p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>Mission</h3>
              <p>To make everyday safety feel simpler, faster, and more dependable for women and communities.</p>
            </div>
            <div className="about-card">
              <h3>Features</h3>
              <p>SOS, safe routes, incident reporting, AI help, and nearby emergency access.</p>
            </div>
          </div>
        </section>
      )
    }

    return (
      <section className="view-card hero-view">
        <div className="hero-copy">
          <p className="eyebrow">Women’s safety platform</p>
          <h1>Stay protected with one-tap help.</h1>
          <p>SafeSphere combines emergency support, smart guidance, and community awareness into a calm, confident experience.</p>

          <div className="cta-row">
            <button className="primary-btn" onClick={() => setActiveView(isLoggedIn ? 'dashboard' : 'dashboard')}>Open dashboard</button>
            <button className="secondary-btn" onClick={() => setActiveView('about')}>Learn more</button>
          </div>
        </div>

        <div className="hero-panel">
          <h3>What you can do</h3>
          <ul>
            <li>Send an SOS with your live location</li>
            <li>Find a safer route to your destination</li>
            <li>Get AI guidance in unsafe moments</li>
          </ul>
        </div>
      </section>
    )
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-icon">🛡</div>
          <div>
            <h1>SafeSphere</h1>
            <p>Women’s safety app</p>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <button key={item.id} className={`nav-item ${activeView === item.id ? 'active' : ''}`} onClick={() => setActiveView(item.id)}>
              <span>{item.emoji}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <h3>Need help now?</h3>
          <p>Use SOS for a fast emergency response flow.</p>
          <button className="primary-btn" onClick={() => setActiveView('sos')}>Open SOS</button>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Live safety dashboard</p>
            <h2>{activeView === 'home' ? 'Welcome to SafeSphere' : navItems.find((item) => item.id === activeView)?.label}</h2>
          </div>

          <div className="topbar-actions">
            {isLoggedIn ? (
              <>
                <span className="user-chip">{user?.name || 'Signed in'}</span>
                <button className="secondary-btn" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <button className="secondary-btn" onClick={() => setActiveView('dashboard')}>Login</button>
                <button className="primary-btn" onClick={() => setActiveView('dashboard')}>Sign up</button>
              </>
            )}
          </div>
        </header>

        {authMessage && <div className="notice">{authMessage}</div>}

        {!isLoggedIn && activeView === 'dashboard' ? (
          <section className="auth-grid">
            <div className="view-card">
              <div className="section-heading">
                <p className="eyebrow">Login</p>
                <h2>Secure your account</h2>
              </div>
              <form className="stack-form" onSubmit={handleLogin}>
                <input value={loginForm.email} onChange={(event) => setLoginForm({ ...loginForm, email: event.target.value })} placeholder="Email" />
                <input type="password" value={loginForm.password} onChange={(event) => setLoginForm({ ...loginForm, password: event.target.value })} placeholder="Password" />
                <button className="primary-btn" type="submit">Login</button>
              </form>
            </div>

            <div className="view-card">
              <div className="section-heading">
                <p className="eyebrow">Create account</p>
                <h2>Join SafeSphere</h2>
              </div>
              <form className="stack-form" onSubmit={handleSignup}>
                <input value={signupForm.name} onChange={(event) => setSignupForm({ ...signupForm, name: event.target.value })} placeholder="Full name" />
                <input value={signupForm.email} onChange={(event) => setSignupForm({ ...signupForm, email: event.target.value })} placeholder="Email" />
                <input type="password" value={signupForm.password} onChange={(event) => setSignupForm({ ...signupForm, password: event.target.value })} placeholder="Password" />
                <button className="primary-btn" type="submit">Sign up</button>
              </form>
            </div>
          </section>
        ) : (
          renderView()
        )}
      </main>
    </div>
  )
}

export default App
