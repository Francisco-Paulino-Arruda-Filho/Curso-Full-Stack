import './assets/ts/main'
import './assets/css/style.css'
import { useEffect, useState } from 'react';
import CalculadoraClass from './assets/ts/main';

const Calculadora = () => {

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      let calculadoraInstance: CalculadoraClass;
      try {
        calculadoraInstance = new CalculadoraClass();
        calculadoraInstance.inicia();

      } catch (error) {
        console.error("Erro ao inicializar a calculadora:", error);
      }
      return () => {
        calculadoraInstance.removeEventListeners();
        document.removeEventListener('click', calculadoraInstance.capturaCliques);
        document.removeEventListener('keyup', calculadoraInstance.capturaEnter);
      };
      setIsInitialized(true);
    }
  }, [isInitialized]); // Apenas inicializa uma vez
  
  return (
    <section className="container">
      <h1>Calculadora</h1>

      <table className="calculadora">
        <tbody>
        <tr>
          <td colSpan={4}>
            <input type="text" className="display" />
          </td>
        </tr>

        <tr>
          <td>
            <button className="btn btn-clear">
              C
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              (
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              )
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              /
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button className="btn btn-num">
              7
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              8
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              9
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              *
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button className="btn btn-num">
              4
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              5
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              6
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              +
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button className="btn btn-num">
              1
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              2
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              3
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              -
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button className="btn btn-num">
              .
            </button>
          </td>
          <td>
            <button className="btn btn-num">
              0
            </button>
          </td>
          <td>
            <button className="btn btn-del">
              &laquo;
            </button>
          </td>
          <td>
            <button className="btn btn-eq">
              =
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </section>
  )
}

export default Calculadora