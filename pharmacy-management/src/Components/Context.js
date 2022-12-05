import React from 'react';
import { createContext, useContext, useCallback, useState } from "react";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [dadosUsuario, setDadosUsuario] = useState({email: "",
  senha: ""});
  
  // vou deixar esse console apenas para nos ajudar a entender o que está acontecendo
  console.log({ dadosUsuario });

  return (
    <UsuarioContext.Provider
      value={{
        

        dadosUsuario,

        alteraDadosUsuario: useCallback(
          (dadosUsuario) => {
            setDadosUsuario(dadosUsuario);
          },
          [setDadosUsuario]
        ),
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

// Permite usar os dados dentro de cada componente
const useUsuario = () => {
  return useContext(UsuarioContext);
};

export { UsuarioProvider, useUsuario };