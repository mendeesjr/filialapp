export interface IFilial {
  id: number;
  nome_filial: string;
  total_funcionarios: number;
}

export type FilialContextType = {
  filiais: IFilial[];
  saveFilial: (todo: IFilial) => void;
  updateFilial: (id: number) => void;
  deleteFilial: (id: number) => void;
};