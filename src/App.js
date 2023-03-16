import { useState } from 'react';
import './App.css';
import CrudAPI from './componentes/CrudAPI';
import CrudApp  from './componentes/CrudApp';

function App() {
  return (
    <div className="App">
      <h1>Hola Crud</h1>
      <CrudApp />
      
    </div>
  );
}

export default App;
