const SkillsBar = ({ skillName, proficiency }) => {
    return (
        <div className="skills-bar-container mb-4">
            <div className="skills-bar-header">
                <span className="skills-bar-name">{skillName}</span>
                <span className="skills-bar-percentage">{proficiency}%</span>
            </div>
            <div className="progress" style={{ height: '20px' }}>
                <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${proficiency}%` }}
                    aria-valuenow={proficiency}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    );
};

export default SkillsBar;
