import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InitialForm={
    id:null,
    name:'',
    lastname:''
}

const CrudForm = ({create,update,dataToEdit,setDataToEdit}) => {
    const[form,setForm]=useState(InitialForm)
    useEffect(()=>{
        console.log("Elementos"+dataToEdit)
        if(dataToEdit){
            setForm(dataToEdit)
        }
        else{
            setForm(InitialForm)
        }
    },[dataToEdit])
    const handleChange=(e)=>{
       // console.log(e.target.name +" "+ e.target.value)
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
       // console.log(form)
    };
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Este es el ID" + form.id)
        if(!form.name || !form.lastname){
            alert('Ingrese datos')
            return
        }
        if(form.id===null)
        {
            create(form)
        }
        else
        {
            update(form)
        }
        handleReset()
     }
    const handleReset=(e)=>{
        setForm(InitialForm)
        setDataToEdit(null)
    };

    return(
        <div length="400px">
            <h3>{dataToEdit?"Editar":"Agregar"}</h3>
    <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name='name' placeholder="Ingrese su nombre"onChange={handleChange} value={form.name} />
                <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" name='lastname' placeholder="Ingrese su apellido" onChange={handleChange} value={form.lastname}/>
    </Form.Group>
      
      <Button variant="primary" value='Enviar' type="submit">
        Enviar
      </Button>
      <Button variant="primary" value='Reset' type="submit" onClick={handleReset}>
        Reiniciar
      </Button>
    </Form>

            
        </div>
    )

    
}

export default CrudForm;

