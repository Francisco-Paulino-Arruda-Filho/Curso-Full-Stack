import { useParams, useSearchParams } from "react-router-dom";

export const Posts = () => {
    const params = useParams();
    const { id } = params; 
    const [ qs, setQs ] = useSearchParams(window.location.search);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Posts {`para' ${id}`} e {`Qs: page + ${qs.get('segunda')}`}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}