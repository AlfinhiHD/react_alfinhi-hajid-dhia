


const PackagesItem = ({props}) => {            
    
    return (
        <>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>Start from IDR</p>
            <h2>{props.price}</h2>
        </>
    )
}

export default PackagesItem