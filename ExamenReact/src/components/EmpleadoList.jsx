import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmpleadoList = () => {
  const [empleados, setEmpleados] = useState([]);

  const fetchEmpleados = async () => {
    try {
      const res = await axios.get('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado');
      setEmpleados(res.data);
    } catch (error) {
      console.error("Error al obtener empleados", error);
    }
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Listado de Empleados</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">DNI</th>
            <th className="border p-2">Dirección</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map(emp => (
            <tr key={emp.id}>
              <td className="border p-2">{emp.nombre}</td>
              <td className="border p-2">{emp.dni}</td>
              <td className="border p-2">{emp.direccion}</td>
              <td className="border p-2">{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpleadoList;
