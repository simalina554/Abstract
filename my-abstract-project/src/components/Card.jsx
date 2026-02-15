function Card({ image, title, description }) {
    return (
        <div className="with_logo">
            <img src={image} alt={title} style={{ width: '80px' }}/>
                <div className="without_logo">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="learn"><button>Learn More</button><span
                        className="material-symbols-outlined">arrow_forward</span></div>
                </div>
        </div>
    )
}

export default Card;