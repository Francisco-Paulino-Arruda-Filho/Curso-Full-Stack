import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import gerarIP from "../../utils/gerarIP";
import { useState } from "react";

const GeradorIP = () => {

    const [IP, setIP] = useState('');

    return (
        <div className="container mt-4">
            <div className="mb-3">
                <h1>Gerador de IP</h1>
                <button className="btn btn-primary" onClick={() => setIP(gerarIP)}>
                    Verificar IP
                </button>
            </div>
            <div className="mb-3">
                IP: {IP}
            </div>
        </div>
    )
}

export default GeradorIP;
