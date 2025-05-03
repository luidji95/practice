const Kontrole = ({
  searchTerm,
  setSearchTerm,
  selectSort,
  setSelectSort,
  handleSort,
  prikaziSamoKupljene,
  setPrikaziSamoKupljene,
  filtriranaKategorija,
  setFiltriranaKategorija,
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Pretrazi artikal"
        value={searchTerm}
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
    </div>
  );
};

export default Kontrole;
