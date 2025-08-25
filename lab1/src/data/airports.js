const airport = {
  name: "Skyview International Airport",
  code: "SIA",
  location: {
    city: "Springfield",
    country: "USA",
    latitude: 39.7817,
    longitude: -89.6501
  },
  airlines: [
    { id: 1, name: "SkyJet Airlines", code: "SJ" },
    { id: 2, name: "BlueWings", code: "BW" },
    { id: 3, name: "AeroExpress", code: "AE" }
  ],
  gates: [
    { id: "A1", status: "occupied", flight: "SJ102" },
    { id: "A2", status: "available", flight: null },
    { id: "B1", status: "occupied", flight: "BW201" },
    { id: "B2", status: "maintenance", flight: null }
  ],
  flights: [
    {
      flightNo: "SJ102",
      airline: "SkyJet Airlines",
      destination: "New York (JFK)",
      departureTime: "2025-08-21T12:30:00Z",
      status: "boarding",
      gate: "A1"
    },
    {
      flightNo: "BW201",
      airline: "BlueWings",
      destination: "Chicago (ORD)",
      departureTime: "2025-08-21T13:15:00Z",
      status: "delayed",
      gate: "B1"
    },
    {
      flightNo: "AE303",
      airline: "AeroExpress",
      destination: "Los Angeles (LAX)",
      departureTime: "2025-08-21T15:00:00Z",
      status: "on time",
      gate: "A2"
    }
  ]
};

export default airport;
