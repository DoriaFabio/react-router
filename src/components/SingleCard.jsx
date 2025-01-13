import style from "./SingleCard.module.css";
function SingleCard(
    {
        // immagine = "https://picsum.photos/600/400",
        // titolo,
        data,
    }) {
    return (
        <div className="d-flex justify-content-center">
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
        </div>
    );
}

export default SingleCard;