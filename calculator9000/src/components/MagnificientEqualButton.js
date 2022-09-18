const MagnificientEqualButton = (props) => {

    return (
        <div className="btn-egal">
            <button className="button-egal" onClick={()=> props.egal('=')}>=</button>
        </div>
    );
}

export default MagnificientEqualButton