const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h5 className="timeline-title">{event.title}</h5>
                        <p className="timeline-date">{event.date}</p>
                        <p className="timeline-description">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
