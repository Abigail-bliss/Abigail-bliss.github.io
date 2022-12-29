import './resources/css/NavBar.css';
import {useState} from 'react';

const Navbar = () => {
    const [isAriaExpanded, setAria] = useState(false);
    const [isDataVisible, setDataVis] = useState(false);
    const [isIconAnimated, setIcon] = useState(false);

    const handleClick = () => {
        setAria(!isAriaExpanded);
        setDataVis(!isDataVisible);
        setIcon(!isIconAnimated);
    }

    return (  
        <header className="primary-header flex">
            <button onClick={handleClick} className={isIconAnimated ? "mobile-nav-toggle is-active" : "mobile-nav-toggle"} id="mobile-menu" aria-controls="primary-navigation" aria-expanded={isAriaExpanded}>
                <span className="bar"></span> 
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <nav>
                <ul id="primary-navigation" className="primary-navigation flex" data-visible={isDataVisible}>
                    <li className="active">
                        <a href="#hero">
                            <span aria-hidden="true" className='navbar__number'>00</span>HOME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <span aria-hidden="true" className='navbar__number'>01</span>ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#links">
                            <span aria-hidden="true" className='navbar__number'>02</span>LINKS
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <span aria-hidden="true" className='navbar__number'>03</span>PROJECTS
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Navbar;