// TemaContext.js
import React, { createContext, useState } from 'react';


// Criação do contexto para o tema
export const TemaContext = createContext();
// para criar o contento chama uma função, que é do próprio react

// Criação do componente que irá prover o contexto
export function TemaProvider({ children }) {
// estado que vai receber o claro
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema( tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
