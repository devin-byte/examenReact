import React from 'react';
import EmpleadoList from '/components/EmpleadoList';
import EmpleadoForm from '/components/EmpleadoForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Empleados</h1>
      <EmpleadoForm />
      <EmpleadoList />
      <ToastContainer />
    </div>
  );
}

export default App;
