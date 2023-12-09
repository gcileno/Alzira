import 'bulma/css/bulma.min.css';

export function SortearCartas() {
  const cartas = Array.from({ length: 5 }, (_, index) => {
    
    const numeroAleatorio = Math.floor(Math.random() * 22) + 1;
    return (
      <div key={numeroAleatorio} className="column is-one-fifth">
        <img
          src={`/images/card.jpg`}
          alt={`Carta ${numeroAleatorio}`}
          className="button is-centered"
          style={{
            width: '170px',
            height: 'auto',
            margin: '5px',
          }}
        />
      </div>
    );
  });

  return (
    <div className="columns is-multiline mt-4 is-flex is-justify-content-center">
      {cartas}
    </div>
  );
}
