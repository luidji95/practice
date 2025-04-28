import { useState } from "react";

const studenti = [
  { id: 1, ime: "Ana", ocena: 8 },
  { id: 2, ime: "Marko", ocena: 5 },
  { id: 3, ime: "Luka", ocena: 9 },
  { id: 4, ime: "Mina", ocena: 6 },
  { id: 5, ime: "Ivana", ocena: 4 },
];

function App() {
  const [djaci, setDjaci] = useState(studenti);
  const [prosecnaOcena, setProsecnaOcena] = useState(0);

  const noviDjaci = djaci.filter((caci) => caci.ocena >= 6);

  const prosecnaOcenaPolozenih = () => {
    setProsecnaOcena(
      noviDjaci.reduce((acc, caci) => acc + caci.ocena, 0) / noviDjaci.length
    );
  };
  return (
    <div>
      <h2>Hello</h2>
      {djaci.map((caci) => (
        <p key={caci.id}>
          {caci.ime} - {caci.ocena}
        </p>
      ))}
      <button onClick={() => prosecnaOcenaPolozenih()}>Klik</button>
      <p>Prosecna ocena studenata koji su polozili je : {prosecnaOcena}</p>
    </div>
  );
}

export default App;
