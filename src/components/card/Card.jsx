import "./Card.scss"

const Card = ({ data }) => {
    const { listPrice, address, bathrooms, bedrooms, buildingAreaTotal, listAgentFullName, links, status } = data
    const { streetNumber, streetName, city, stateOrProvince } = address
    const { photos, virtualTours } = links

    return (
        <div className="card">
            <img src={photos[0].original} alt="photo" className="photo" />
            {status === "Sold" && <p className="sold-label">SOLD</p>}
            <div className="information">
                <div>
                    <p className="price">{listPrice}$</p>
                    <p className="adress">{streetNumber} {streetName}, {city}, {stateOrProvince}</p>
                    <ul className="benefits">
                        <li className="benefit">Beds: {bedrooms}</li>
                        <li className="benefit">Baths: {bathrooms}</li>
                        <li className="benefit">Area: {buildingAreaTotal}</li>
                    </ul>
                    {virtualTours && virtualTours.map((tour, i) => <button className="button" key={i}>{tour.category}</button>)}
                    
                    <p className="author">Listed by: {listAgentFullName}</p>
                </div>
                <div className="bottom-nav">
                    <button className="details">Details</button>
                    <button className="like">&#9825;</button>
                </div>
            </div>
        </div>
    )
}

export default Card