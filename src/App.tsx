import { useState } from "react";

function App() {
  const [listaKnjiga, setListaKnjiga] = useState([]);
  const [imeKnjige, setImeKnjige] = useState("");
  const [serachTerm, setSearchTerm] = useState("");

  const dodajKnjigu = () => {
    if (imeKnjige.trim() === "") return;

    const novaKnjiga = {
      id: Date.now(),
      title: imeKnjige,
    };

    setListaKnjiga([...listaKnjiga, novaKnjiga]);
    setImeKnjige("");
  };

  const knjigeZaPrikaz =
    serachTerm.length > 3
      ? listaKnjiga.filter((knjiga) =>
          knjiga.title.toLowerCase().includes(serachTerm.toLowerCase())
        )
      : listaKnjiga;

  return (
    <div>
      <h1>Spisak knjiga</h1>
      <input
        type="text"
        placeholder="Unesite ime knjige!"
        value={imeKnjige}
        onChange={(e) => setImeKnjige(e.target.value)}
      />
      <button onClick={() => dodajKnjigu()}>Dodaj knjigu</button>

      <input
        type="text"
        placeholder="Pretrazi knjigu"
        value={serachTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {knjigeZaPrikaz.map((knjiga) => (
        <p key={knjiga.id}>{knjiga.title}</p>
      ))}
    </div>
  );
}

export default App;
