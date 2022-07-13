import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { MarvelPage, DcPage, Search, Hero } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<Search />} />
          <Route path="hero/:id" element={<Hero />} />

          {/* <Navigate /> es un componente implicito en react-router-dom y sirve para
        navegar de manera automatica hacia el path que se le asigne entre comillas */}
          <Route path="/" element={<Navigate to="Marvel" />} />
        </Routes>
      </div>
    </>
  );
};
