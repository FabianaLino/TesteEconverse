import React from "react";
import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch(
            "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        )
            .then((Response) => Response.json())
            .then(setData);
    }, []);

    if (!data || !data.length) return null;

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <div className="cotainer">
            <div className="cabeçalho">
                <img
                    src="vitrine/src/images/cabeçalho.png"
                    alt="Cabeçalho da página"
                />
            </div>
            <div className="banner">
                <img
                    src="vitrine/src/images/img-banner.png"
                    alt="Banner do cabeçalho"
                />
            </div>
            <div className="barra-icons">
                <img
                    src="vitrine/src/images/img-barra-icons.png"
                    alt="Icones"
                />
            </div>
            <div className="tipos-de-produtos">
                <img
                    src="vitrine/src/images/img-tipos-produto.png"
                    alt="Tipos de produto"
                />
            </div>
            <div className="carousel" ref={carousel}>
                {data.map((item) => {
                    const { productName, descriptionShort, photo, price } =
                        item;
                    return (
                        <div className="item" key={productName}>
                            <div className="info">
                                <span className="descrição">
                                    {descriptionShort}
                                </span>
                                <span className="image-produto">{photo}</span>
                                <span className="valor-produto">{price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="buttons">
                <button onClick={handleLeftClick}>
                    <img src="" alt="Scroll Left"></img>
                </button>
                <button onClick={handleRightClick}>
                    <img
                        src="vitrine/src/images/right_chevron_icon.png"
                        alt="Scroll Right"
                    ></img>
                </button>
            </div>
            <div className="parceiros">
                <img
                    src="vitrine/src/images/img-parceiros.png"
                    alt="Imagem banner parceiros"
                />
            </div>
            <div className="produtos">
                <img
                    src="vitrine/src/images/img-produtos.png"
                    alt="Imagem banner produtos"
                />
            </div>
            <div className="marcas">
                <img
                    src="vitrine/src/images/img-marcas.png"
                    alt="Imagens das marcas"
                />
            </div>
            <div className="footer">
                <img
                    src="vitrine/src/images/img-fundo-footer.png"
                    alt="Imagem de fundo do rodapé"
                />
            </div>
        </div>
    );
}

export default App;