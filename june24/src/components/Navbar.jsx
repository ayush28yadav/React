import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/learn', label: 'Learn' },
 
  { to: '/test', label: 'Test Page' },
  { to: '/fetching', label: 'api call' },
  { to: '/todo', label: 'To-Do' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <p className="brand-title">React Router Demo</p>
        <p className="brand-subtitle">Click the navbar to move between pages.</p>
      </div>

      <nav className="nav-links" >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
