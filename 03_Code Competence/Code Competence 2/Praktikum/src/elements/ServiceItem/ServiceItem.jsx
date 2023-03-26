


const ServiceItem = (props) => {            
    
    return (
        <>
        <div className="col-1">
          <button className="bulletList" />
        </div>
        <div className="col-5">
          <h2>{props.label}</h2>
          <p>
            {props.desc}
          </p>
        </div>
        </>
    )
}

export default ServiceItem