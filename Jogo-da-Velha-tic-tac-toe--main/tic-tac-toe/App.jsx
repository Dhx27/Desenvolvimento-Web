import { useState } from 'react';
import './App.css'; 

// ----------------------------------------------------
// 1. COMPONENTE QUADRADO (Square)
// ----------------------------------------------------
// Recebe o valor (prop) e a função de clique (prop)
function Square({ value, onSquareClick }) {
  return (
    <button 
      className="square" 
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

// ----------------------------------------------------
// 2. COMPONENTE TABULEIRO (Board)
// ----------------------------------------------------
function Board() {
  // Estado 1: Armazena o tabuleiro (9 posições)
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // Estado 2: Gerencia de quem é a vez. true = X, false = O
  const [xIsNext, setXIsNext] = useState(true); 

  function handleClick(i) {
    // 1. Previne cliques se o quadrado já está preenchido OU se há um vencedor
    if (squares[i] || calculateWinner(squares)) { 
      return; 
    }

    // Cria uma CÓPIA do estado atual (Imutabilidade)
    const nextSquares = squares.slice(); 
    
    // 2. Define o marcador ('X' ou 'O')
    if (xIsNext) {
      nextSquares[i] = 'X'; 
    } else {
      nextSquares[i] = 'O'; 
    }
    
    // 3. Atualiza os estados: novo tabuleiro e inverte o jogador
    setSquares(nextSquares);
    setXIsNext(!xIsNext); 
  }

  // 4. Lógica de Vencedor e Status (será exibido acima do tabuleiro)
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Vencedor: " + winner;
  } else {
    status = "Próximo jogador: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* Passa o valor e a função de clique para o quadrado de forma individual */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// ----------------------------------------------------
// 3. FUNÇÃO AUXILIAR: Verifica o Vencedor
// ----------------------------------------------------
function calculateWinner(squares) {
  // Todas as 8 combinações de vitória (linhas, colunas, diagonais)
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    
    // Verifica se os três quadrados não são null e têm o mesmo valor ('X' ou 'O')
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Retorna 'X' ou 'O'
    }
  }
  return null; // Ninguém ganhou ainda
}

// ----------------------------------------------------
// 4. COMPONENTE PRINCIPAL (Game)
// ----------------------------------------------------
export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board /> 
      </div>
      <div className="game-info">
        <div>{/* Futuro: Histórico de Movimentos */}</div>
        <ol>{/* Futuro: Botões de 'Ir para o movimento' */}</ol>
      </div>
    </div>
  );
}