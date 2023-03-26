


const NavElement = (props) => {            
    
    return (
        <a
        className="nav-link mr-5"
        href={props.href}
        >
        {props.label}
        </a>
    )
}

export default NavElement