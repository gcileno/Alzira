import 'bulma/css/bulma.min.css';

export default function informacao() {

    return (
        <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-primary">
                            <p className="title">Vertical...</p>
                            <p className="subtitle">Top tile</p>
                        </article>
                        <article className="tile is-child notification is-warning">
                            <p className="title">...tiles</p>
                            <p className="subtitle">Bottom tile</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-info">
                            <p className="title">Credito da Imagem</p>
                            <p className="subtitle"><a href="https://br.freepik.com/vetores-gratis/papel-de-parede-para-celular-de-taro-mistico-desenhado-a-mao_21862417.htm#query=tarot&position=47&from_view=keyword&track=sph&uuid=4d9a7b81-c072-42ac-9112-ebc66d3f545a">Imagem de pikisuperstar</a></p>
                            <figure className="image is-3by5">
                                <img src={"/images/card.jpg"}></img>
                            </figure>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-danger">
                        <p className="title">Wide tile</p>
                        <p className="subtitle">Aligned with the right tile</p>
                        <div className="content">

                        </div>
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                    <div className="content">
                        <p className="title">Sobre Tarot</p>
                        <p className="subtitle">O Tarot é um conjunto de cartas associadas a práticas de adivinhação, autoconhecimento e espiritualidade. Ele possui origens antigas e foi utilizado ao longo da história para diversos fins, desde jogos de cartas até ferramentas de reflexão espiritual.</p>

                        <p className="subtitle">O baralho de Tarot é composto por 78 cartas, divididas em dois grupos principais: os Arcanos Maiores e os Arcanos Menores. Os Arcanos Maiores representam conceitos mais amplos e simbólicos, muitas vezes relacionados a arquétipos universais, enquanto os Arcanos Menores são semelhantes a um baralho de cartas comuns, divididos em quatro naipes (copas, ouros, paus e espadas). Porém, para este trabalho, foram usados apenas os arcanos maiores.</p>

                        <p className="subtitle">A interpretação das cartas do Tarot envolve uma combinação de simbolismos, intuição e conhecimento do leitor. Cada carta tem significados específicos que podem variar dependendo do contexto da leitura, das cartas ao redor e das perguntas feitas.</p>

                        <p className="subtitle">É importante notar que o Tarot não é uma forma de previsão definitiva do futuro, mas muitas pessoas o utilizam como uma ferramenta para reflexão, autoconhecimento e orientação espiritual. Além disso, algumas pessoas veem o Tarot como uma expressão artística e simbólica, enquanto outras acreditam em suas capacidades místicas. O uso do Tarot pode variar entre práticas esotéricas, espirituais e de entretenimento, dependendo das crenças e abordagens individuais.</p>
                    </div>
                </article>
            </div>

        </div>
    )
}