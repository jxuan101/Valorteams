import './index.css';
// import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Breeze from '../../assets/Breeze.png';
import Icebox from '../../assets/Icebox.png';
import Bind from '../../assets/Bind.png';
import Haven from '../../assets/Haven.png';
import Split from '../../assets/Split.png';
import Ascent from '../../assets/Ascent.png';

export default function Navbar() {

    // // Horizontal scrolling on navbar
    // const onWheel = e => {
    //     e.preventDefault();
    //     var container = scrollRef.current;
    //     var containerScrollPosition = scrollRef.current.scrollLeft;
    //     container.scrollTo({
    //         top: 0,
    //         left: containerScrollPosition + e.deltaY,
    //         behaviour: 'smooth'
    //     })
    // }

    // const scrollRef = useRef(null);

    return (
        <div className = 'navbar-container'
            //  ref = {scrollRef}
            //  onWheel = {onWheel}
        >
            <nav>
                <div className = "navbar-link">
                    <NavLink to = "/breeze" className = "navbar-link-url" activeClassName = "selected-nav-link">
                        <img src = {Breeze} alt = "Breeze" />
                    </NavLink>
                </div>
                <div className = "navbar-link">
                    <NavLink to = "/icebox" className = "navbar-link-url" activeClassName = "selected-nav-link">
                        <img src = {Icebox} alt = "Icebox" />
                    </NavLink>
                </div>
                <div className = "navbar-link">
                    <NavLink to = "/bind" className = "navbar-link-url" activeClassName = "selected-nav-link">
                        <img src = {Bind} alt = "Bind" />
                    </NavLink>
                </div>
                <div className = "navbar-link">
                    <NavLink to = "/haven" className = "navbar-link-url" activeClassName = "selected-nav-link">
                        <img src = {Haven} alt = "Haven" />
                    </NavLink>
                </div>
                <div className = "navbar-link">
                    <NavLink to = "/split" className = "navbar-link-url" activeClassName = "selected-nav-link">
                        <img src = {Split} alt = "Split" />
                    </NavLink>
                </div>
                <div className = "navbar-link">
                    <NavLink to = "/ascent" className = "navbar-link-url" activeClassName = "selected-nav-link">
                        <img src = {Ascent} alt = "Ascent" />
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}