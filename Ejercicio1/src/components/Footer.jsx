const Footer = ({ year, companyName, socialLinks }) => {
    return (
        <footer className="footer mt-5 py-4 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>{companyName}</h5>
                        <p>&copy; {year} Todos los derechos reservados.</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <h5>Sígueme</h5>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="social-link me-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
