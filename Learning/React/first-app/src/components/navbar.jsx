
// stateless functional components
const Navbar = (props)=>{
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <span className="badge bg-secondary badge-pill">{props.totalCounters} <i>greater than zero</i></span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;