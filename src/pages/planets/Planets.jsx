import React, { useEffect, useState } from "react";
import { PlanetService } from "../../service/planets";
import AllPlanets from "./components/AllPlanets";
import Search from "./components/Search";

const Planets = () => {
  const [page, setPage] = useState(1);
  const [planets, setPlanets] = useState([]);
  const [planetFiltered, setPlanetFiltered] = useState([]);
  const [totalPlanets, setTotalPlanets] = useState(0);

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    getPlanets();
  }, [page]);

  const getPlanets = async () => {
    try {
      const planets = await PlanetService.search(page);
      setPlanets(planets.data.results);
      setPlanetFiltered(planets.data.results);
      setTotalPlanets(planets.data.count);
    } catch (error) {
      alert("Error getting planets");
    }
  };

  return (
    <div className="planets-container container">
      <h1 className="fsize-40 fw-600"> Awesome Star Wars APP</h1>
      <Search planets={planets} setPlanetFiltered={setPlanetFiltered} />
      <AllPlanets
        planets={planetFiltered}
        page={page}
        setPage={setPage}
        totalPlanets={totalPlanets}
      />
    </div>
  );
};

export default Planets;
