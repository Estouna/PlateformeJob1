const SaveTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Résultats</th>
                    <th>Effacer</th>
                </tr>
            </thead>
            <tbody>
                {props.saves.length > 0 ? (props.saves.map((save) => (
                    <tr key={save.id}>
                        <td>{save.result}</td>
                        <td>
                            <button className="btn-delete muted-button">Delete</button>
                        </td>
                    </tr>
                ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default SaveTable;