const SocialLink = ({ platform, url, icon }) => {
    return (
        <a
            href={url}
            className="social-link-item"
            target="_blank"
            rel="noopener noreferrer"
            title={platform}
        >
            <img src={icon} alt={platform} className="social-icon" />
        </a>
    );
};

export default SocialLink;
