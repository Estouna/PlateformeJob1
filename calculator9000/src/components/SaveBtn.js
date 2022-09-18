import { useState } from 'react'
const SaveBtn = (props) => {
    const initialFormState = { id: null, result: '' }
    const [save, setSave] = useState(initialFormState)

    // marche pas je récupère pas le calcul que le résultat
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setSave({ ...save, [name]: value })
        console.log(event)
    }
    return (

        <form className="btn-save"
            onSubmit={event => {
                event.preventDefault()
                if (save == props.result) return

                props.addSave(save)
                setSave(initialFormState)
            }}
        >                                                                                                                                                                                                            
            <input
                type="hidden"
                name="result"
                value={props.result.toString()}
                onChange={handleInputChange}
            />
            <button className="button-save" name="save">Save</button>
        </form>

    );
}

export default SaveBtn