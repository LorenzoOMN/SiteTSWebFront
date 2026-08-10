import { useState } from "react";
import "./App.css";

type Pessoa = { nome: string; idade: number };

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  const handleActivatorIn = () => {
    const numIdade = Number(idade);

    if (nome.trim() === "" || numIdade < 1) {
      return;
    }

    const obj: Pessoa = { nome, idade: numIdade };
    const temp = [...pessoas, obj];
    setPessoas(temp);
    setNome("");
    setIdade("");
  };

  const handleActivatorOut = () => {
    const temp = [];
    setPessoas(temp);
  };

  const handleActivatorMid = () => {
    const temp: Pessoa[] | undefined = [...pessoas];
    temp.pop();
    setPessoas(temp);
  };

  return (
    <main className="container">
      <div className="cad">
        <h1>Cadastro de Pessoas</h1>

        <div className="caixas">
          <label htmlFor="cpNome">Nome</label>
          <input
            id="cpNome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            type="text"
          />
        </div>
        <div className="caixas">
          <label htmlFor="cpIdade">Idade</label>
          <input
            id="cpIdade"
            min={1}
            value={idade}
            onChange={(event) => setIdade(event.target.value)}
            type="number"
          />
        </div>
        <button onClick={handleActivatorIn}>Adicionar</button>
        <button onClick={handleActivatorOut}>Limpar</button>
        <button onClick={handleActivatorMid}>Excluir Ultimo</button>

        <div className="pessoas">
          <h2>Pessoas Cadastradas</h2>
          <ul>
            {pessoas.map((pessoa) => (
              <li>
                {pessoa.nome} - {pessoa.idade}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
