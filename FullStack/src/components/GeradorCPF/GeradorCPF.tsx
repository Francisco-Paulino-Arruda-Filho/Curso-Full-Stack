import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import gerarCPF from "../../utils/geradoCPF";
import { useState } from "react";

const GeradorCPF = () => {
    
    const [cpf, setCpf] = useState('');

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <h1>Gerador de CPF</h1>
                <button className="btn btn-primary" onClick={() => setCpf(gerarCPF)}>
                    Verificar
                </button>
            </div>
            <div className="mb-3">
                CPF: {cpf}
            </div>
        </div>
    )
}

export default GeradorCPF;