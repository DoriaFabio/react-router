import { Link } from "react-router-dom";
import style from "./Card.module.css";
function Card(
    {
        // immagine = "https://picsum.photos/600/400",
        // titolo,
        // contenuto = "Descrizione non presente",
        // tags = "Tags non presenti",
        // id,
        data,
        onDeletePost,
    }) {
    return (
        <div className={`card ${style.cardEffect}`}>
            <img
                src={data.immagine}
                className={`card-img-top ${style.cardImg}`}
                alt={data.titolo}
            />
            <div className="card-body">
                <h5 className="card-title">{data.titolo}</h5>
                <p className="card-text">{data.contenuto}</p>
                <div className="pb-2">{data.tags.join(" ")}</div>
                <Link to={`/posts/${data.id}`}>Vedi dettaglio</Link>
                <button className="mx-2" onClick={onDeletePost}>
                    Cancella
                </button>
            </div>
        </div>
    );
}

export default Card;