import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Loader from "./Component/Loader";
import Trending from "./Component/Trending";
import Popular from "./Component/Popular";
import Movies from "./Component/Movies";
import Tv_Show from "./Component/Tv_Show";
import People from "./Component/People";
import MovieDetails from "./Component/MovieDetails";
import TvDetails from "./Component/TvDetails";
import PeopleDetails from "./Component/PeopleDetails";
import Trailer from "./Component/Partials/Trailer";
import Notfound from "./Component/Notfound";
import SeasonDetails from "./Component/SeasonDetails";
import Contact from "./Component/Contact";
import About from "./Component/About";

function App() {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<Tv_Show />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv/details/:id/:number" element={<SeasonDetails />} />
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PeopleDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
