import NavBar from "../components/Navbar";
import { Outlet } from "react-router";
export default function MainLayout() {
  return (
    <main>
      <NavBar />
      <Outlet />
      {/* Outlet es un componente dinamico que puede renderizar cualqueir cosa */}
    </main>
  );
}
