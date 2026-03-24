import './mobile-nav.css'

function MobileNav({ token, onShowAuth, onAddPost, onHome, onLogout }) {
    return(
    <nav className="mobile-nav">
        <button className="mobile-nav_btn" onClick={onHome}>🏠</button>
        {token ? (
            <>
            <button className="mobile-nav_btn" onClick={onAddPost}>➕</button>
            <button className="mobile-nav_btn" onClick={onLogout}>👤</button>
            </>
        ) : (
            <>
            <button className="mobile-nav_btn" onClick={onShowAuth}>👤</button>
            </>
        )

        }
    </nav>
    )
}

export default MobileNav