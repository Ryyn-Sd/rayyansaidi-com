import { Link } from 'gatsby'
import * as React from 'react'
import "./style.css"

const Nav = (props) =>
    <ul>
        <li className="navbar"><b><Link href="/" className={props.act == 1 ? "active" : null}>Home</Link></b></li>
        <li><b><a>Bio</a></b></li>
        <li><a><b>Projects</b></a></li>
        <li className="navbar"><Link to="projects/salamsaidi" className={props.act == 2 ? "active" : null}>salamsaidi.com</Link></li>
    </ul>

export default Nav