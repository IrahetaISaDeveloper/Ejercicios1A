const Gallery = ({ images }) => {
    return (
        <div className="gallery-container">
            <div className="row g-3">
                {images.map((image, index) => (
                    <div key={index} className="col-md-4">
                        <div className="gallery-item">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="gallery-image img-fluid rounded"
                            />
                            <div className="gallery-overlay">
                                <p className="gallery-title">{image.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
