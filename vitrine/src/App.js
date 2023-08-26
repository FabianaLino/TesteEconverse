import { useEffect, useState, useRef } from "react";


export const App = () => {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch(
            "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        )
            .then((Response) => Response.json())
            .then(setData);
    }, []);

    //if (!data || !data.length) return null;

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
                    src="/static/images/cabeçalho.png"
                    alt="Cabeçalho da página"
                />
            </div>
            <div className="banner">
                <img
                    src="static/images/img-banner.png"
                    alt="Banner do cabeçalho"
                />
            </div>
            <div className="barra-icons">
                <img src="static/images/img-barra-icons.png" alt="Icones" />
            </div>
            <div className="tipos-de-produtos">
                <img
                    src="static/images/img-tipos-produto.png"
                    alt="Tipos de produto"
                />
            </div>
            <div className="carousel" ref={carousel}>
                {data.map((item) => (
                    const { productName, descriptionShort, img, price } = item;
                    return (
                        <div className="item" key={productName}>
                            <div className="info">
                                <span className="descrição">
                                    {descriptionShort}
                                </span>
                                <img
                                    className="image-produto"
                                    src={img}
                                    alt="Produto"
                                />
                                <span className="valor-produto">{price}</span>
                            </div>
                        </div>
                    );
                ))}
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
                    src="static/images/img-parceiros.png"
                    alt="Imagem banner parceiros"
                />
            </div>
            <div className="produtos">
                <img
                    src="static/images/img-produtos.png"
                    alt="Imagem banner produtos"
                />
            </div>
            <div className="marcas">
                <img
                    src="static/images/img-marcas.png"
                    alt="Imagens das marcas"
                />
            </div>
            <div className="footer">
                <img
                    src="static/images/img-fundo-footer.png"
                    alt="Imagem de fundo do rodapé"
                />
            </div>
        </div>
    );
}

