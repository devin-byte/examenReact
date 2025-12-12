import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const EmpleadoForm = () => {
  const [form, setForm] = useState({ nombre: '', dni: '', direccion: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!form.nombre || !form.dni || !form.direccion || !form.email) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    if (!validarEmail(form.email)) {
      toast.error("Formato de email inválido");
      return;
    }

    try {
      await axios.post('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado', form);
      toast.success("Empleado agregado correctamente");
      setForm({ nombre: '', dni: '', direccion: '', email: '' });
    } catch (error) {
      toast.error("Error al agregar empleado");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded mb-6">
      <div className="mb-2">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="dni"
          placeholder="DNI"
          value={form.dni}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Agregar Empleado
      </button>
    </form>
  );
};

export default EmpleadoForm;
