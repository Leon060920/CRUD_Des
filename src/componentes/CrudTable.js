const CrudTable = ({data,setDataToEdit,deleteData}) => {
    console.log(`Algo ${data.id} ${data.name} ${data.latname} `)
    return(
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <td></td>
                        <th>Apellido</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ? (
                            <tr>
                                <td colSpan='3'>No hay elementos para mostrar</td>
                            </tr>
                        ) : (
                                data.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.lastname}</td>
                                        <td><button onClick={()=>setDataToEdit(item)}>Editar</button>
                                        <button onClick={()=>deleteData(item.id)}>Eliminar</button></td>
                                    </tr>
                                )
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable;