import style from "./Card.module.css";
function SingleCard(
    {
        // immagine = "https://picsum.photos/600/400",
        // titolo,
        data,
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
            </div>
        </div>
    );
}

export default SingleCard;