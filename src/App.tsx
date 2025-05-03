import { useState } from "react";
import ListaProizvoda from "./ListaProizvoda";
import FormaZaUnosProizvoda from "./FormaZaUnosProizvoda";
import Kontrole from "./Kontrole";

function App() {
  const [proizvodi, setProizvodi] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectSort, setSelectSort] = useState("");
  const [prikaziSamoKupljene, setPrikaziSamoKupljene] = useState(false);
  const [filtriranaKategorija, setFiltriranaKategorija] = useState("all");

  const obrisiProizvod = (id) => {
    setProizvodi((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleKupljeno = (id) => {
    setProizvodi((prev) =>
      prev.map((p) => (p.id === id ? { ...p, kupljeno: !p.kupljeno } : p))
    );
  };

  const handleSort = (sortValue) => {
    let sortirani = [...proizvodi];

    switch (sortValue) {
      case "a-z":
        sortirani.sort((a, b) => a.nazivArtikla.localeCompare(b.nazivArtikla));
        break;
      case "z-a":
        sortirani.sort((a, b) => b.nazivArtikla.localeCompare(a.nazivArtikla));
        break;
      case "price-low":
        sortirani.sort((a, b) => a.cenaArtikla - b.cenaArtikla);
        break;
      case "price-high":
        sortirani.sort((a, b) => b.cenaArtikla - a.cenaArtikla);
        break;
      default:
        break;
    }

    setProizvodi(sortirani);
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

  const ukupnaCenaKupljenih = proizvodi
    .filter((p) => p.kupljeno)
    .reduce((zbir, p) => zbir + p.cenaArtikla, 0);

  return (
    <div>
      <FormaZaUnosProizvoda setProizvodi={setProizvodi} proizvodi={proizvodi} />

      <Kontrole
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectSort={selectSort}
        setSelectSort={setSelectSort}
        handleSort={handleSort}
        prikaziSamoKupljene={prikaziSamoKupljene}
        setPrikaziSamoKupljene={setPrikaziSamoKupljene}
        filtriranaKategorija={filtriranaKategorija}
        setFiltriranaKategorija={setFiltriranaKategorija}
      />

      <ListaProizvoda
        proizvodi={prikazaniArtikli}
        onDelete={obrisiProizvod}
        onToggleKupljeno={toggleKupljeno}
      />

      <div>
        <p>Ukupno proizvoda u korpi: {prikazaniArtikli.length}</p>
        <p>Ukupna cena kupljenih proizvoda: {ukupnaCenaKupljenih} RSD</p>
      </div>
    </div>
  );
}

export default App;
