import { useEffect, useState } from "react";
import { HelpHttp } from "../helper/HelpHttp";
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudAPI = () => {
    let api=HelpHttp();
    let url="http://localhost:5000/users"

    useEffect(()=>{
        api.get(url).then(response=>console.log(response))
    },[]);

    const [db,setDB] = useState([])
    const [dataToEdit,setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        api.get(url).then(response=>{
            //console.log(response)
            if (!response.err){
                setDB(response)
            }
            else{
                setDB(null)
            }
            setLoading(false)
        })
    }, [])

    const createData=(data)=>{
        data.id=new Date()
        setDB([...db,data])
    };

    const updateData=(data)=>{
        let newData = db.map(item => item.id==data.id?data:item)
        setDB(newData)
    };
    const deleteData=(id)=>{
        let eliminar = db.filter(item => item.id!==id)
        setDB(eliminar)
    };
    return(
        <div>
            <h1>CrudAPI</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            {loading && <Loader/>}
            {error && <Message/>}
            {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>}
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    )

    
}

export default CrudAPI;