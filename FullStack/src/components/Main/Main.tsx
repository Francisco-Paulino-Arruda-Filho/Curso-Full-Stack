import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus } from "react-icons/fa";
import fireDb from '../../../config/Firebase';
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

interface Tarefa {
  nome: string;
}

const Main = () => {
  const initialState: Tarefa = { nome: "" };

  const [data, setData] = useState<{ [key: string]: Tarefa }>({});
  const [state, setState] = useState<Tarefa>(initialState);
  const { nome } = state;
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const tarefasRef = fireDb.child("tarefas");
    tarefasRef.on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData(snapshot.val());
      } else {
        setData({});
      }
    });
    return () => tarefasRef.off(); // Para evitar memory leak
  }, []);

  useEffect(() => {
    if (id && data[id]) {
      setState(data[id]);
    } else {
      setState(initialState);
    }
  }, [id, data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data)
    console.log(state)
    if (!nome) {
      toast.error("Escreva algum valor");
    } else {
      const tarefasRef = fireDb.child("tarefas");
      console.log(tarefasRef)
      if (!id) {
        console.log("adicionando")
        tarefasRef.push(state, (err) => {
          if (err) {
            console.log(err)
            toast.error("Erro ao salvar");
          } else {
            toast.success("Sucesso no salvamento");
          }
        });
      } else {
        console.log("aui")
        tarefasRef.child(id).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Edição feita com sucesso");
          }
        });
      }
      setTimeout(() => navigate('/'), 500);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit} className="w-80 mx-auto form-custom">
            <h1 className="text-center mb-4">Lista de Tarefas</h1>
            <div className="form-group mb-3">
              <label htmlFor='nome'>Nome</label>
              <input
                type='text'
                id='nome'
                name='nome'
                value={nome}
                onChange={handleInputChange}
                placeholder='Nome'
                className="form-control form-control-lg w-100"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <FaPlus /> {id ? "Update" : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
