const Cards = ({ img, caption }) => {
    return (
        <div className="card-item">
            <figure className="figure text-center">
                <img
                    src={img}
                    className="figure-img img-fluid rounded mb-2"
                    alt={caption}
                />
                <figcaption className="figure-caption">{caption}</figcaption>
            </figure>
        </div>
    );
};
 
export default Cards;