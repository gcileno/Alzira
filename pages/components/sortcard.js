import 'bulma/css/bulma.min.css';

export function SortearCartas({ onCartaClick, cartaSelecionada }) {
  const cartas = Array.from({ length: 5 }, (_, index) => {
    
    const numeroAleatorio = Math.floor(Math.random() * 22) + 1;
    const isSelected = numeroAleatorio === cartaSelecionada;

    return (
      <div key={numeroAleatorio} className="column is-one-fifth" onClick={() => onCartaClick(numeroAleatorio)}>
        <img
          src={`/images/card.jpg`}
          alt={`Carta ${numeroAleatorio}`}
          className={`column is-one-fifth ${isSelected ? 'selected-card' : ''}`}
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
