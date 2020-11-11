import React from "react"
import { Link } from "react-router-dom"

export const Navigation = () => (
  <nav>
    <ul className="list-unstyled">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)
