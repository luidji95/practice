import { useState } from "react";
import ListaRadnika from "./ListaRadnika";
import { v4 as uuidv4 } from "uuid"; // Za generisanje ID-a

const initialEmployee = {
  id: uuidv4(),
  ime: "Milan",
  prezime: "Jovanović",
  titula: "CEO",
  plata: 1000,
  zaposleni: [],
};

function App() {
  const [firma, setFirma] = useState(initialEmployee);

  const dodajZaposlenog = (parentId) => {
    const dodaj = (zaposleni) => {
      if (zaposleni.id === parentId) {
        const novi = {
          id: uuidv4(),
          ime: `Novi${Math.floor(Math.random() * 1000)}`,
          prezime: "Zaposleni",
          titula: "Developer",
          plata: zaposleni.plata + 1000,
          zaposleni: [],
        };
        return { ...zaposleni, zaposleni: [...zaposleni.zaposleni, novi] };
      }
      return {
        ...zaposleni,
        zaposleni: zaposleni.zaposleni.map(dodaj),
      };
    };
    setFirma((prev) => dodaj(prev));
  };

  const izracunajUkupnuPlatu = (zaposleni) => {
    return (
      zaposleni.plata +
      zaposleni.zaposleni.reduce((sum, z) => sum + izracunajUkupnuPlatu(z), 0)
    );
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h2>Hijerarhija zaposlenih</h2>
      <ListaRadnika radnik={firma} onDodaj={dodajZaposlenog} />
      <hr />
      <p>
        <strong>Ukupna plata:</strong> {izracunajUkupnuPlatu(firma)}
      </p>
    </div>
  );
}

export default App;
