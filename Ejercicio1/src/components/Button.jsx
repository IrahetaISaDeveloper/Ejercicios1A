const Button = ({ label, onClick, variant = 'primary', size = 'md' }) => {
    const buttonClass = `btn btn-${variant} btn-${size}`;
    
    return (
        <button className={buttonClass} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
