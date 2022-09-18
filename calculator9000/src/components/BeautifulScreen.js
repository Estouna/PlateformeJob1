const BeautifulScreen = (props) => {
    return (
        <div className="ecran">
            <span>{props.affichage}</span>
            <span className="min-resultat">= {props.result ? props.result : ''}</span>
        </div>
    );
}

export default BeautifulScreen