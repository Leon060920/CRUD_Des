import { useState } from "react";
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const InitialDB=[
    {
        id:0,
        name:'Leonel',
        lastname:'Armenta'
    },
    {
        id:1,
        name:'Benito',
        lastname:'Camel'
    }
]

const CrudApp = () => {
    const [db,setDB] = useState(InitialDB)
    const [dataToEdit,setDataToEdit] = useState(null)
    const createData=(data)=>{
        console.log("Algo"+ data)
        data.id=db.length;
        setDB([...db,data])
    };
    const updateData=(data)=>{
        let newData = db.map(item => item.id==data.id?data:item)
        alert("Mi nueva data" + newData)
        setDB([...db,newData])
    };
    const deleteData=(id)=>{
        let eliminar = db.filter(item => item.id!==id)
        setDB(eliminar)
    };
    console.log("Mi data" + db.name)
    return(
        <div>
            <h1>CrudApp</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    )

    
}

export default CrudApp;