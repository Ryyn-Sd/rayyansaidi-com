import { Link } from 'gatsby'
import React from 'react'
import "./style.css"

const Nav = (props) =>
    <ul className="nav">
        <li className="navbar"><Link to="/" className={props.act === 1 ? "active" : null}>Home</Link></li>
        <li className="navbar"><Link to="/bio" className={props.act === 2 ? "active" : null}>Bio</Link></li>
        <li className="navbar"><Link to="/projects" className={props.act === 3 ? "active" : null}>Projects</Link></li>
        <li className="navbar"><Link to="/suggestions" className={props.act === 4 ? "active" : null}>Suggestions</Link></li>
    </ul>

export default Nav
