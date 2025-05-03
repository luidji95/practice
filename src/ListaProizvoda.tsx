import Proizvod from "./Proizvod";

const ListaProizvoda = ({ proizvodi, onDelete, onToggleKupljeno }) => {
  return (
    <div>
      {proizvodi.map((proizvod) => (
        <Proizvod
          key={proizvod.id}
          proizvod={proizvod}
          onDelete={onDelete}
          onToggleKupljeno={onToggleKupljeno}
        />
      ))}
    </div>
  );
};

export default ListaProizvoda;
