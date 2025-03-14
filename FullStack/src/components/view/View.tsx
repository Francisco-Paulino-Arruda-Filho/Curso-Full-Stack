import { useEffect, useState } from 'react';
import fireDb from '../../../config/Firebase';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useParams, useNavigate } from 'react-router-dom';

interface Tarefa {
    nome: string;
}

const View = () => {
    const [data, setData] = useState<Tarefa | null>(null);
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const tarefaRef = fireDb.child(`tarefas/${id}`);
        tarefaRef.on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData(snapshot.val());
            } else {
                setData(null);
            }
        });

        return () => tarefaRef.off(); // Evitar memory leak
    }, [id]);

    return (
        <>
            <div className='container mt-5'>
                {data ? (
                    <div key={id} className='view'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title header">{data.nome}</h5>
                                <button
                                    onClick={() => navigate('/')}
                                    className="btn btn-primary"
                                >
                                    Voltar
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Carregando...</p> // Adiciona uma mensagem de carregamento se a tarefa não for encontrada
                )}
            </div>
        </>
    )
}

export default View;
