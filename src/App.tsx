import { useState } from "react";

function App() {
  const [proizvodi, setProizvodi] = useState([]);
  const [artikal, setArtikal] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectSort, setSelectSort] = useState("");
  const [prikaziSamoKupljene, setPrikaziSamoKupljene] = useState(false);
  const [categoryInput, setCategoryInput] = useState("Hrana");
  const [filtriranaKategorija, setFiltriranaKategorija] = useState("all");

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

  const prikazaniArtikli = proizvodi
    .filter((artkl) =>
      artkl.nazivArtikla.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((artkl) => (prikaziSamoKupljene ? artkl.kupljeno === true : true))
    .filter((artkl) =>
      filtriranaKategorija === "all"
        ? true
        : artkl.kategorija === filtriranaKategorija
    );

  const obrisiProizvod = (id) => {
    const noviNiz = proizvodi.filter((pr) => pr.id !== id);
    setProizvodi(noviNiz);
  };

  const toggleKupljeno = (id) => {
    const noviNiz = proizvodi.map((proizvod) =>
      proizvod.id === id
        ? { ...proizvod, kupljeno: !proizvod.kupljeno }
        : proizvod
    );

    setProizvodi(noviNiz);
  };
  const ukupnaCenaKupljenih = proizvodi
    .filter((p) => p.kupljeno)
    .reduce((zbir, p) => zbir + p.cenaArtikla, 0);

  const handleSort = (sortValue) => {
    let sortirani = [...proizvodi];

    if (sortValue === "a-z") {
      sortirani.sort((a, b) => a.nazivArtikla.localeCompare(b.nazivArtikla));
    } else if (sortValue === "z-a") {
      sortirani.sort((a, b) => b.nazivArtikla.localeCompare(a.nazivArtikla));
    } else if (sortValue === "price-low") {
      sortirani.sort((a, b) => a.cenaArtikla - b.cenaArtikla);
    } else if (sortValue === "price-high") {
      sortirani.sort((a, b) => b.cenaArtikla - a.cenaArtikla);
    }

    setProizvodi(sortirani);
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
      <input
        type="text"
        placeholder="Pretrazi artikal"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={selectSort}
        onChange={(e) => {
          setSelectSort(e.target.value);
          handleSort(e.target.value);
        }}
      >
        <option value="all">All</option>
        <option value="a-z">Naziv A–Z</option>
        <option value="z-a">Naziv Z–A</option>
        <option value="price-low">Cena rastuće</option>
        <option value="price-high">Cena opadajuće</option>
      </select>
      <input
        type="checkbox"
        checked={prikaziSamoKupljene}
        onChange={() => setPrikaziSamoKupljene((prev) => !prev)}
      />{" "}
      Prikaži samo kupljene
      <select
        value={filtriranaKategorija}
        onChange={(e) => setFiltriranaKategorija(e.target.value)}
      >
        <option value="all">Sve kategorije</option>
        <option value="Hrana">Hrana</option>
        <option value="Kuhinja">Kuhinja</option>
        <option value="Tehnika">Tehnika</option>
      </select>
      <hr />
      {prikazaniArtikli.map((proizvod) => (
        <p key={proizvod.id}>
          <input
            type="checkbox"
            checked={proizvod.kupljeno}
            onChange={() => toggleKupljeno(proizvod.id)}
          />{" "}
          {proizvod.nazivArtikla} - {proizvod.cenaArtikla} RSD -{" "}
          {proizvod.kategorija}
          <button onClick={() => obrisiProizvod(proizvod.id)}>Obriši</button>
        </p>
      ))}
      <p>Ukupno proizvoda u korpi: {prikazaniArtikli.length}</p>
      <p>Ukupna cena kupljenih proizvoda je : {ukupnaCenaKupljenih}</p>
    </div>
  );
}

export default App;
