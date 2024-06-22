import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
        <Link to="/">
            <button>BotCollection</button>
        </Link>
        <Link to="/army">
            <button>YourArmy</button>
        </Link>
    </nav>
  )
}

export default NavBar;