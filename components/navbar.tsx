import Link from 'next/link'
import '../styles/globals.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Booky</div>
      <div className="menuItems">
        <ul>
          <li>
            <Link className='link' href="/">Home</Link>
          </li>
          <li>
            <Link className='link' href="/mylists">My Lists</Link>
          </li>
          <li>
            <Link className='link' href="/login">Login</Link>
          </li>
          <li>
            <Link className='link' href="/register">Register</Link>
          </li>
          <li>
            <Link className='link' href="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}