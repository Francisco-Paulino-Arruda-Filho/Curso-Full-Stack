import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import gerarSenha from './GeradorSenha'

const GeradorSenhas = () => {
    const [qtdCaracteres, setQtdCaracteres] = useState(0);
    const [adicionarNumeros, setAdicionarNumeros] = useState(false);
    const [letrasMaiusculas, setLetrasMaiusculas] = useState(false);
    const [letrasMinusculas, setLetrasMinusculas] = useState(false);
    const [adicionarSimbolos, setAdicionarSimbolos] = useState(false);
    const [senhaGerada, setSenhaGerada] = useState('')

    const handleChangeQtdCaracteres = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQtdCaracteres(Number(e.target.value));
    };

    const handleChangeAdicionarNumeros = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdicionarNumeros(e.target.checked);
    };

    const handleChangeLetrasMaiusculas = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLetrasMaiusculas(e.target.checked);
    };

    const handleChangeLetrasMinusculas = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLetrasMinusculas(e.target.checked);
    };

    const handleChangeAdicionarSimbolos = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdicionarSimbolos(e.target.checked);
    };

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <label htmlFor="qtdCaracteres" className="form-label">Quantidade de caracteres</label>
                <input
                    type="number"
                    id="qtdCaracteres"
                    className="form-control"
                    value={qtdCaracteres}
                    onChange={handleChangeQtdCaracteres}
                    placeholder="Digite a quantidade de caracteres"
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    id="adicionarNumeros"
                    className="form-check-input"
                    checked={adicionarNumeros}
                    onChange={handleChangeAdicionarNumeros}
                />
                <label htmlFor="adicionarNumeros" className="form-check-label">Adicionar números</label>
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    id="letrasMaiusculas"
                    className="form-check-input"
                    checked={letrasMaiusculas}
                    onChange={handleChangeLetrasMaiusculas}
                />
                <label htmlFor="letrasMaiusculas" className="form-check-label">Letras maiúsculas</label>
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    id="letrasMinusculas"
                    className="form-check-input"
                    checked={letrasMinusculas}
                    onChange={handleChangeLetrasMinusculas}
                />
                <label htmlFor="letrasMinusculas" className="form-check-label">Letras minúsculas</label>
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    id="adicionarSimbolos"
                    className="form-check-input"
                    checked={adicionarSimbolos}
                    onChange={handleChangeAdicionarSimbolos}
                />
                <label htmlFor="adicionarSimbolos" className="form-check-label">Adicionar símbolos</label>
            </div>
            <button className="btn btn-primary"  
                onClick={
                    () => setSenhaGerada(
                        gerarSenha(letrasMaiusculas, letrasMinusculas, adicionarNumeros, adicionarSimbolos, qtdCaracteres) || '')
                    }
            >Gerar Senha</button>
            {senhaGerada && (
                <div className="mt-3">
                    <h5>Senha Gerada:</h5>
                    <p className="form-control">{senhaGerada}</p>
                </div>
            )}
        </div>
    );
};

export default GeradorSenhas;
