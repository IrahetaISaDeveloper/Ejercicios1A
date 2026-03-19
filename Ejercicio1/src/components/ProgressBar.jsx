const ProgressBar = ({ label, percentage, variant = 'primary' }) => {
    return (
        <div className="progress-container mb-3">
            <label className="progress-label">{label}</label>
            <div className="progress">
                <div
                    className={`progress-bar bg-${variant}`}
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {percentage}%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
