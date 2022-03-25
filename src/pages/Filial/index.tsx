import React , {FC, useState} from "react";
import { FilialContext } from "../../contexts/filial";
import { FilialContextType, IFilial } from "../../types/filial";
import { FaUserTie,FaPen,FaTrash } from 'react-icons/fa';
import './filia.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Filial : React.FC = () => {
  const { saveFilial,deleteFilial,updateFilial,filiais } = React.useContext(FilialContext) as FilialContextType;

  const [formData, setFormData] = React.useState<IFilial | {}>();
  const [lgShow, setLgShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [idDelete, setIdDelete] = useState(0);
  const [idUpdate, setIdUpdate] = useState(0);
  const [filialUpdate, setFilialUpdate] = useState<IFilial | {}>();

  const handleForm = (e:any): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveFilial = (e: React.FormEvent, formData: IFilial | any) => {
    e.preventDefault();
    saveFilial(formData);
    setLgShow(false);
  };

  const handleDeletaFilial = () => {
    deleteFilial(idDelete);
    setSmShow(false);
  };

  const handleUpdateFilial = () => {
    //updateFilial(idUpdate);
    setLgShow(false);
  };
  
  const handleEditar = (id: number) : any => {
     //filialSelect = filiais.filter((data) => data.id === id);
    setFilialUpdate(filiais.filter((data) => data.id === id));
    setLgShow(true);
    console.log(filialUpdate);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="botoes">
              <Button onClick={() => setLgShow(true)}>Adicionar Filial</Button>
            </div>  
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome Filial</th>
              <th scope="col">Qtd Funcionarios</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
          {filiais.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
              <td>
                <Button className="btn-sm">
                    <FaUserTie />
                </Button>
                {' '}
                <Button className="btn-sm" onClick={() => {handleEditar(item.id)}}>
                    <FaPen />
                </Button>
                {' '}
                <Button className="btn-sm" onClick={() => {setSmShow(true);setIdDelete(item.id);} }>
                    <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Cadastro Filial
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="Form" onSubmit={(e) => handleSaveFilial(e, formData)}>
              <Form.Group className="mb-3">
                <Form.Label>Nome Filial</Form.Label>
                <Form.Control type="text" placeholder="nome da filial" onChange={handleForm} id="nome_filial" />
              </Form.Group>
               
              <Form.Group className="mb-3">
                <Form.Label>Total Funcionarios</Form.Label>
                <Form.Control type="text" placeholder="total de funcionarios" onChange={handleForm} id="total_funcionarios" />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={formData === undefined ? true : false}>
                Cadastrar
              </Button>
            </Form>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-lsm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Cadastro Filial
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Deseja excluir essa filial ?</p>
          <Button variant="danger" type="button" onClick={handleDeletaFilial}>
            Sim
          </Button>
          {''}
          <Button variant="primary" type="button" align-item="right" onClick={() => setSmShow(false)}>
            Não
          </Button>
        </Modal.Body>
      </Modal>

      
    </>
  )
}

export default Filial;