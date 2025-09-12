import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
        <NavBar/>

        <div style={{display: "flex", flexDirection: "column", flexGrow: 1}}>
            <main style={{ flexGrow: 1, padding: "24px", display: "flex", justifyContent: "center", alignItems:"center"}}>
                <Outlet />
            </main>

            <footer
            style={{
                padding: "16px",
                textAlign: "center",
            }}
            >
            © 2025 My App Fidel Morales
            </footer>
        </div>

    </div>
  );
}
