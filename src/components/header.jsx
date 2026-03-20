import './Header.css';

function Header({ token, onLogout, onShowAuth, onAddPost }) {
    return(
        <header className='header'>
            <div className='header_inner'>
                <h1 className="header_logo">BLOG.DEV</h1>
                <nav className="header_nav">
                    {token ? (
                        <>
                            <button className="btn btn_secondary" onClick={onAddPost}>Dodaj post</button>
                            <button className="btn btn_secondary" onClick={onLogout}>Wyloguj</button>
                        </>
                    ) : (
                        <>
                            <button className="btn btn_secondary" onClick={onShowAuth}>Zarejestruj się</button>
                            <button className="btn btn_primary" onClick={onShowAuth}>Zaloguj się</button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;