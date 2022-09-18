const AmazingNumberButton = (props) => {

    return (
        <div className="bloc-btn">
            <div className="ligne">
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('7'.toString())}>7</button>
                </div>
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('8'.toString())}>8</button>
                </div>
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('9'.toString())}>9</button>
                </div>
            </div>

            <div className="ligne">
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('4'.toString())}>4</button>
                </div>
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('5'.toString())}>5</button>
                </div>
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('6'.toString())}>6</button>
                </div>
            </div>

            <div className="ligne">
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('1'.toString())}>1</button>
                </div>
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('2'.toString())}>2</button>
                </div>
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('3'.toString())}>3</button>
                </div>
            </div>
            <div className="ligne-egal-point">
                <div className="btn-0">
                    <button className="button" onClick={() => props.chiffre('0'.toString())}>0</button>
                </div>
                <div className="btn">
                    <button className="button" onClick={() => props.chiffre('.')}>.</button>
                </div>
            </div>
        </div>
    );
}

export default AmazingNumberButton;