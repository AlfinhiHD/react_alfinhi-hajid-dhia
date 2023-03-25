


const Title = (props) => {            
    
    return (
        <h2
            className={props.className}
            style={props.style}
        
        >
        {props.label}
        </h2>
    )
}

export default Title