import { useState } from "react";

const proizvodi = [
  { id: 1, naziv: "Hleb", cena: 50, dostupan: true },
  { id: 2, naziv: "Mleko", cena: 80, dostupan: false },
  { id: 3, naziv: "Sir", cena: 120, dostupan: true },
  { id: 4, naziv: "Jaja", cena: 100, dostupan: true },
];

function App() {
  const [artikli, setArtikli] = useState(proizvodi);
  console.log(artikli);

  const prikaziDostupneArtikle = () => {
    const dostupniArtikli = artikli
      .filter((artikl) => artikl.dostupan)
      .map((artikl) => ({ ...artikl, cena: artikl.cena * 1.1 }));

    setArtikli(dostupniArtikli);
  };

  return (
    <div>
      <h2>Hello</h2>
      {artikli.map((item) => (
        <p key={item.id}>
          {item.naziv} - {item.cena}
        </p>
      ))}
      <button onClick={() => prikaziDostupneArtikle()}>
        Prikazi dosutpne artikle
      </button>
    </div>
  );
}

export default App;
