import CrudTable from "./CrudTable";

function App() {
  return (
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "Arial, sans-serif"}}>
      <h1>Firestore CRUD Table</h1>
      <CrudTable />
    </div>
  );
}

export default App;
