import React from "react";
import { Outlet, Navigate } from "react-router-dom";


export const RotaPrivada = ({ dadosUsuario }) => {
  return dadosUsuario ? <Outlet /> : <Navigate to="/login" />;
};

export default RotaPrivada;