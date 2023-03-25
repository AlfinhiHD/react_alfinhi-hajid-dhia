


const NavElement = (props) => {            
    
    return (
        <a
        className={props.label}
        href={props.href}
        >
        {props.label}
        </a>
    )
}

export default NavElement