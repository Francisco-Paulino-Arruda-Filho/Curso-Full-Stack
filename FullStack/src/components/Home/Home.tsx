import { useEffect, useState } from "react";
import fireDb from '../../../config/Firebase';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";
//import GeradorIP from "../GeradorIPs/GeradorIP";

interface Tarefa {
  nome: string;
}

const Home = () => {
  const [data, setData] = useState<{ [key: string]: Tarefa }>({});


  useEffect(() => {
    const tarefasRef = fireDb.child("tarefas");
    tarefasRef.on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData(snapshot.val());
      } else {
        setData({});
      }
    });
    return () => tarefasRef.off(); // Evitar memory leak
  }, []);

  const handleDelete = (id: string) => {
    console.log(id)
    if (window.confirm("Você tem certeza que deseja deletar esta tarefa?")) {
      const tarefasRef = fireDb.child(`tarefas/${id}`);
      tarefasRef.remove((err) => {
        if (err) {
          toast.error("Erro ao deletar a tarefa");
        } else {
          toast.success("Tarefa deletada com sucesso");
        }
      });
    }
  };

  return (
    <div className='container mt-5'>
      <h2 className="mb-4">Lista de tarefas</h2>
      <table className="table table-striped table-bordered table-hover styled-table">
        <thead>
          <tr>
            <th>Nome da tarefa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id) => (
            <tr key={id}>
              <td>{data[id]?.nome || "Sem nome"}</td>
              <td>
                <button className="btn btn-danger"
                  onClick={() => handleDelete(id)}
                >
                  Deletar
                </button>
                <Link to={`/update/${id}`}>
                  <button className='btn btn-success'>
                    Editar
                  </button>
                </Link>
                <Link to={`/view/${id}`}>
                  <button className='btn btn-info'>
                    Visualizar
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
