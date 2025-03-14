import { useEffect, useRef, useState } from "react";

export const Redirect = () => {
    const [ time, setTime ] = useState(5);
    const timeout = useRef(1);
    useEffect(() => {
        timeout.current = setTimeout(() => {
            window.location.href = "/";
        }, 5000);
        return () => {
            clearTimeout(timeout.current);
        }
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Você será redirecionado em {time} segundos</h1>
                    </div>
                </div>
            </div>
        </>
    );
}