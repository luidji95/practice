import { useState } from "react";

const FormaZaUnosProizvoda = ({ setProizvodi, proizvodi }) => {
  const [artikal, setArtikal] = useState("");
  const [categoryInput, setCategoryInput] = useState("Hrana");

  const dodajArtikal = () => {
    if (artikal.trim() === "") return;

    const newArtikal = {
      id: Date.now(),
      nazivArtikla: artikal,
      cenaArtikla: Math.floor(Math.random() * 901) + 100,
      kategorija: categoryInput,
      kupljeno: false,
    };

    setProizvodi([...proizvodi, newArtikal]);
    setArtikal("");
  };

  return (
    <div>
      <h1>Lista proizvoda</h1>
      <input
        type="text"
        placeholder="Unesite novi proizvod"
        value={artikal}
        onChange={(e) => setArtikal(e.target.value)}
      />
      <select
        value={categoryInput}
        onChange={(e) => setCategoryInput(e.target.value)}
      >
        <option value="Hrana">Hrana</option>
        <option value="Tehnika">Tehnika</option>
        <option value="Kuhinja">Kuhinja</option>
      </select>
      <button onClick={dodajArtikal}>Dodaj artikal u korpu</button>
      <hr />
    </div>
  );
};

export default FormaZaUnosProizvoda;
