import React from "react";
import {FilialContextType, IFilial} from "../types/filial"

export const FilialContext = React.createContext<FilialContextType | null>(null);

const FilialProvider: React.FC<React.ReactNode> = ({ children }) => {
    
  const [filiais, setFiliais] = React.useState<IFilial[]>([
    {
      id: 1,
      nome_filial: 'Filial 1',
      total_funcionarios: 10,
    },
    {
      id: 2,
      nome_filial: 'Filial 2',
      total_funcionarios: 60,
    },
  ]);
  const ultimoID = filiais.reduce(function(prev, current) {
    return (prev.id > current.id) ? prev : current
  });
  const saveFilial = (filial: IFilial) => {
    const newTFilial: IFilial = {
      id: ultimoID.id+1,
      nome_filial: filial.nome_filial,
      total_funcionarios: filial.total_funcionarios,
    };
    setFiliais([...filiais, newTFilial]);
  };

  const updateFilial = (id: number) => {
    filiais.filter((filial: IFilial) => {
      if (filial.id === id) {
        setFiliais([...filiais]);
      }
    });
  };

  const deleteFilial = (id: number) => {
    const newState = filiais.filter((data) => data.id !== id);
    setFiliais([...newState]);
  };

  return <FilialContext.Provider value={{ filiais, saveFilial, updateFilial, deleteFilial }}>{children}</FilialContext.Provider>;
};

export default FilialProvider;