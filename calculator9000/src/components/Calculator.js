import ItSOverNineThousand from './ItSOverNineThousand'
import AmazingNumberButton from './AmazingNumberButton'
import BeautifulScreen from './BeautifulScreen'
import Clear from './Clear'
import SaveBtn from './SaveBtn'
import GreatOperationButton from './GreatOperationButton'
import MagnificientEqualButton from './MagnificientEqualButton'
import SaveTable from './SaveTable'
import { useEffect, useState } from 'react'

function Calculator() {
    // const [backups, setBackups] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const backup = await fetch('http://plateformejob1/calculator9000/src/backend/showBackup.php')
    //         const jsonBackup = await backup.json()
    //         setBackups(jsonBackup)
    //     }
    //     fetchData()
    // }, [])

    // const insertResults = async () => {
    //     await fetch('http://plateformejob1/calculator9000/src/backend/insertBackup.php', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //         body: 'calc=calcul&result=resultat'
    //     })
    // }

    /*
        CALCULATRICE
    */
    const [calcul, setCalcul] = useState("");
    const [resultat, setResultat] = useState("");

    const operateurs = ['/', '*', '+', '-', '.'];

    
    const updateCalcul = value => {
        /* 
        S'il s'agit d'un opérateur et que le calcul est strictement égal à rien.
        Ou s'il s'agit d'un opérateur et que la dernière valeur est aussi un opérateur 
        */
       if (((operateurs.includes(value)) && (calcul === '')) || ((operateurs.includes(value)) && (operateurs.includes(calcul.slice(-1))))) {
           return;
        }
        
        setCalcul(calcul + value);
        
        if (!operateurs.includes(value)) {
            setResultat(eval(calcul + value));
        }
    }
    
    const egal = () => {
        if(!calcul) {
            return false;
        }
        setCalcul(eval(calcul));
    }

    const clear = () => {
        const value = '';
        setCalcul(value);
        setResultat(value);
    }

    /* 
        SAUVEGARDES
    */
    const savesData = [
        { id: 1, result: '2' },
        { id: 2, result: '3' },
        { id: 3, result: '4' },
    ]

    const [saves, setSaves] = useState(savesData)

    // Incrémente l'id vu que pas encore bdd
    // ...users garantit que tous les utilisateurs précédents restent dans le tableau.
    const addSave = (save) => {
        save.id = saves.length + 1
        setSaves([...saves, save])
    }

    return (
        <div className="container-calcSave">

            <div className="bloc-calculatrice">
                <div className="calculatrice">
                    <ItSOverNineThousand  calcul={calcul}/>
                    <div className="ligne-ecran">
                        <BeautifulScreen result={resultat} affichage={calcul || "0"} />
                    </div>
                    <div className="bloc-buttons">
                        <div className="ligne-clear">
                            <Clear clear={clear} />
                            <SaveBtn addSave={addSave} calc={calcul} result={resultat}/>
                        </div>
                        <div className="bloc-nombresOperteurs">
                            <AmazingNumberButton chiffre={updateCalcul} />
                            <GreatOperationButton operateur={updateCalcul} />
                        </div>
                        <MagnificientEqualButton egal={egal} />
                    </div>
                </div>
            </div>

            <div className="bloc-save">
                <h2 className="title-blocSave">Sauvegardes</h2>
                <SaveTable saves={saves} />
            </div>

        </div>
    );
}

export default Calculator