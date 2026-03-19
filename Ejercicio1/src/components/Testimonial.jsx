const Testimonial = ({ name, role, comment, image }) => {
    return (
        <div className="testimonial-card">
            <div className="testimonial-image">
                <img src={image} alt={name} className="rounded-circle" />
            </div>
            <p className="testimonial-comment">"{comment}"</p>
            <h6 className="testimonial-name">{name}</h6>
            <p className="testimonial-role">{role}</p>
        </div>
    );
};

export default Testimonial;
