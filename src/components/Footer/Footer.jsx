import {Logo} from "@components/Logo/Logo";
import "./Footer.css";
export const Footer = () => {
    return (
        // TODO: Acabar Footer
        <footer className="footer">
            <div className="container__footer">
                <div className="footer__logo">
                    <Logo />
                </div>
                <div className="footer__links">
                    <a href="/protecció">Protecció de dades.</a>
                </div>
                
            </div>
            <div className="footer__social-network">
                <a href="https://facebook.es" target="" title="Facebook"></a>
                <a href="x.com" title="X"></a>
                <a href="instagram" title="Instagram"></a>
            </div>
            {/* Redes Sociales */}
            {/* Menu */}
        </footer>
    )
}

