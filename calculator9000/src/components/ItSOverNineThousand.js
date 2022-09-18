const ItSOverNineThousand = (props) => {
    return (
        <div className="bloc-itSOver">
            <p className="itSOver">{props.calcul > 9000 ? "It's over 9000" : ''}</p>
        </div>
    );
}

export default ItSOverNineThousand