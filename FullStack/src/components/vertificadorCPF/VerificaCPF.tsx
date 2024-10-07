import { useState } from "react";
import funcaoVerificaCPF from "./funcaoVerificaCPF";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const VerificaCPF = () => {
    const [cpf, setCpf] = useState('');
    const [valido, setValido] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
    };
    
    const handleClick = () => {
        setValido(funcaoVerificaCPF(cpf));
    };
    
    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label htmlFor="cpf" className="form-label">Digite o CPF</label>
                <input 
                    type="text" 
                    id="cpf" 
                    className="form-control" 
                    value={cpf} 
                    onChange={handleChange} 
                    placeholder="000.000.000-00"
                />
            </div>
            <button className="btn btn-primary" onClick={handleClick}>
                Verificar
            </button>
            <div className="mt-3">
                {valido ? (
                    <p className="text-success">CPF válido</p>
                ) : (
                    <p className="text-danger">CPF inválido</p>
                )}
            </div>
        </div>
    );
}

export default VerificaCPF;