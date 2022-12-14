import React from 'react'
import './Navbar.css'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import SailingIcon from '@mui/icons-material/Sailing'
import { useWallet } from 'shared/hooks'

function NavBar() {
  const { address } = useWallet()

  return (
    <div className="nav-container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" style={{ borderBottom: '5px solid #D1AB4D' }}>
                Project1
              </a>
            </li>
            <li>
              <a href="#">Project2</a>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <TwitterIcon sx={{ fontSize: 40 }} />
          <YouTubeIcon sx={{ fontSize: 40 }} />
          <SailingIcon sx={{ fontSize: 40 }} />

          {address && (
            <div className="wallet">
              <p className="address">{`${address.substring(0, 8)}...${address.substring(address.length - 4)}`}</p>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default NavBar
