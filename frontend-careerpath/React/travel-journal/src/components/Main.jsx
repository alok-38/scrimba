import data from "../data"

const Main = () => {
    return (
        <main className="locations">
            {data.map((location) => (
                <section key={location.id} className="location-item">
                    <div className="map">
                        <img src={location.img.src} alt={location.img.alt} />
                        <div className="flex">
                            <div>
                                <img className="marker" src="../images/marker.png" alt="marker" />
                                <h3>{location.country}</h3>
                                <a href={location.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                            </div>
                            <div className="profile">
                                <h2>{location.title}</h2>
                                <p>{location.dates}</p>
                                <p>{location.text}</p>
                            </div>
                        </div>
                    </div>

                </section>
            ))}
        </main>
    )
}

export default Main