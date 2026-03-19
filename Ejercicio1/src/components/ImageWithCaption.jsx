const ImageWithCaption = ({ src, alt, caption, width = '100%' }) => {
    return (
        <figure className="figure text-center image-with-caption">
            <img
                src={src}
                className="figure-img img-fluid rounded"
                alt={alt}
                style={{ width }}
            />
            <figcaption className="figure-caption">{caption}</figcaption>
        </figure>
    );
};

export default ImageWithCaption;
