import { useState } from "react";
import './Votacao.css';

function Votacao() {
  // Estados para armazenar os votos
  const [votes, setVotes] = useState({
    python: 0,
    typescript: 0,
    javascript: 0,
    red: 0,
    blue: 0,
    green: 0,
  });

  // Função para atualizar os votos
  const handleVote = (category) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [category]: prevVotes[category] + 1,
    }));
  };

  return (
    <div className="container">
      <h1>Votação</h1>

      {/* Pergunta 1 - Linguagem Favorita */}
      <h2>Qual sua linguagem favorita?</h2>
      <button onClick={() => handleVote("python")}>Python ({votes.python})</button>
      <button onClick={() => handleVote("typescript")}>TypeScript ({votes.typescript})</button>
      <button onClick={() => handleVote("javascript")}>JavaScript ({votes.javascript})</button>

      {/* Pergunta 2 - Cor Favorita */}
      <h2>Qual sua cor favorita?</h2>
      <button onClick={() => handleVote("red")}>Vermelho ({votes.red})</button>
      <button onClick={() => handleVote("blue")}>Azul ({votes.blue})</button>
      <button onClick={() => handleVote("green")}>Verde ({votes.green})</button>
    </div>
  );
}

export default Votacao
