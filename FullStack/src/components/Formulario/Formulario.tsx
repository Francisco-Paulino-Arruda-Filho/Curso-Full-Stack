import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ValidaFormulario from "./ValidaFormulario";

const Formulario = () => {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [valido, setValido] = useState<boolean | null>(null);
    const [ usuario, setUsuario] = useState('')
    
    const handleChangeCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
    };

    const handleChangeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
    };

    const handleChangeSobrenome = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSobrenome(e.target.value);
    };

    const handleChangeSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value);
    };

    const handleChangeConfirmacaoSenha = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmacaoSenha(e.target.value);
    };

    const handleChangeUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(e.target.value);
    };
    

    const handleClick = () => {
        // Lógica de validação do CPF, senha, etc.
        if(ValidaFormulario(usuario, nome, sobrenome, cpf, senha, confirmacaoSenha)) {
            setValido(true)
        } else {
            setValido(false)
        }
    };
    
    return (
        <div className="container mt-4">
            <h1>Formulário</h1>
            <ul>
                <li>
                    Nenhum campo pode estar vazio
                </li>
                <li>
                    Usuário só poderá conter letras e/ou números
                </li>
                <li>
                    Usuário deverá conter ter entre 3 e 12 caracteres
                </li>
                <li>
                    Senha precisará conter entre 6 e 12 caracteres
                </li>
            </ul>
            <div className="mb-3">
                <label htmlFor="usuario" className="form-label">Usuário</label>
                <input 
                    type="text" 
                    id="usuario" 
                    className="form-control" 
                    value={usuario} 
                    onChange={handleChangeUsuario} 
                    placeholder="Chico"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="cpf" className="form-label">Digite o CPF</label>
                <input 
                    type="text" 
                    id="cpf" 
                    className="form-control" 
                    value={cpf} 
                    onChange={handleChangeCPF} 
                    placeholder="000.000.000-00"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input 
                    type="text" 
                    id="nome" 
                    className="form-control" 
                    value={nome} 
                    onChange={handleChangeNome} 
                    placeholder="Seu nome"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                <input 
                    type="text" 
                    id="sobrenome" 
                    className="form-control" 
                    value={sobrenome} 
                    onChange={handleChangeSobrenome} 
                    placeholder="Seu sobrenome"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha</label>
                <input 
                    type="password" 
                    id="senha" 
                    className="form-control" 
                    value={senha} 
                    onChange={handleChangeSenha} 
                    placeholder="Digite sua senha"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmacaoSenha" className="form-label">Confirme sua senha</label>
                <input 
                    type="password" 
                    id="confirmacaoSenha" 
                    className="form-control" 
                    value={confirmacaoSenha} 
                    onChange={handleChangeConfirmacaoSenha} 
                    placeholder="Confirme sua senha"
                />
            </div>
            <button className="btn btn-primary" onClick={handleClick}>
                Verificar
            </button>
            <div className="mt-3">
                {valido ? (
                    <p className="text-success">Formulário válido</p>
                ) : (
                    <p className="text-danger">Formulário inválido</p>
                )}
            </div>
        </div>
    );
}

export default Formulario