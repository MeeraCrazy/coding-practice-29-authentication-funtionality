// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <p className="home">Home</p>
    </Link>
    <Link to="/about">
      <p className="home">About</p>
    </Link>
  </div>
)

export default Header
