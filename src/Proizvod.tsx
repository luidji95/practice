const Proizvod = ({ proizvod, onDelete, onToggleKupljeno }) => {
  return (
    <p>
      <input
        type="checkbox"
        checked={proizvod.kupljeno}
        onChange={() => onToggleKupljeno(proizvod.id)}
      />{" "}
      {proizvod.nazivArtikla} - {proizvod.cenaArtikla} RSD -{" "}
      {proizvod.kategorija}
      <button onClick={() => onDelete(proizvod.id)}>Obriši</button>
    </p>
  );
};

export default Proizvod;
