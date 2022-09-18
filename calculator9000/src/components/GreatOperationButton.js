const GreatOperationButton = (props) => {
    return (
        <div className="ligne-operateurs">
            <div className="btn">
                <button className="button" onClick={()=> props.operateur('+') }>+</button>
            </div>
            <div className="btn">
                <button className="button" onClick={()=> props.operateur('-') }>-</button>
            </div>
            <div className="btn">
                <button className="button" onClick={()=> props.operateur('*') }>*</button>
            </div>
            <div className="btn">
                <button className="button" onClick={()=> props.operateur('/') }>/</button>
            </div>
        </div>
    );
}

export default GreatOperationButton