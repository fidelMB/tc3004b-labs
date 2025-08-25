import airport from "../data/airports";

function AirportData() {

    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
            <h2>Airport data: {airport.name}</h2>
            {airport.airlines.map((airline) => (
                <h3 key={airline.id}>{airline.name}</h3>
            ))}        
        </div>
    )
}

export default AirportData