const Clear = (props) => {
    return (
            <div className="btn-c">
                <button className="button-c" onClick={()=> props.clear('C') }>C</button>
            </div>
    );
}

export default Clear