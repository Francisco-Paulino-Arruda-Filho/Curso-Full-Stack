import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa o JS do Bootstrap

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Inicio <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">
                                Home <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/posts">
                                Posts <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/redirect">
                                Redirect <span className="sr-only"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
