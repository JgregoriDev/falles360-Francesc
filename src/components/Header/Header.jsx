import { Logo } from "../Logo/Logo";
import "./Header.css";
import { Link } from "wouter";
export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link to="/falles360-Francesc" className="header__nav-link" title="Inicio">
                            Inicio
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <a href="/falles360-Francesc#benefinicios" className="header__nav-link">Beneficios</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/falles360-Francesc#tablasPrecios" className="header__nav-link">Precios</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/falles360-Francesc#patrocinadors" className="header__nav-link">Patrocinadors</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/falles360-Francesc#preguntas" className="header__nav-link">FAQS</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/falles360-Francesc#contacto" className="header__nav-link">Contacto</a>
                    </li>
                    {/* <li className="header__nav-item">
                        <Link href="/falles360-Francesc#" className="header__nav-link">Blog</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};
