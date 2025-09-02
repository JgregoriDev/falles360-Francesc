import { Logo } from "../Logo/Logo";
import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link" title="Inicio">
                        <svg height={`1rem`} width={`1rem`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"/></svg>    
                            Inicio
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Sobre nosotros</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Services</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Portfolio</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Blog</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
