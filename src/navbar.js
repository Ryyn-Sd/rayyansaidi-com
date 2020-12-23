import { Link } from 'gatsby'
import * as React from 'react'
import "./style.css"

const Nav = (props) =>
    <ul className="nav">
        <li className="navbar"><b><Link to="/" className={props.act === 1 ? "active" : null}>Home</Link></b></li>
        <li><b className="heading">Bio</b></li>
        <li className="navbar"><Link to="/bio/family" className={props.act === 2 ? "active" : null}>Family</Link></li>
        <li className="navbar"><Link to="/bio/favroites" className={props.act === 3 ? "active" : null}>Favroites</Link></li>
        <li className="navbar"><Link to="/bio/other" className={props.act === 4 ? "active" : null}>Other</Link></li>
        <li><b className="heading">Projects</b></li>
        <li className="navbar"><Link to="/projects/saidigroup" className={props.act === 5 ? "active" : null}>Saidi Reaserch Group</Link></li>
        <li className="navbar"><Link to="/projects/salamsaidi" className={props.act === 6 ? "active" : null}>Salamsaidi.com</Link></li>
        <li className="navbar"><Link to="/projects/suggestions" className={props.act === 7 ? "active" : null}>Suggestions</Link></li>
    </ul>

export default Nav