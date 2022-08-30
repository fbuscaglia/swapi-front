import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlanetService } from "../../../service/planets";
import Resident from "../../resident/Resident";

const PlanetDetail = () => {
  const { planetId } = useParams();
  const [planetDetails, setPlanetDetails] = useState({});

  useEffect(() => {
    getPlanet();
  }, []);

  const getPlanet = async () => {
    try {
      const planet = await PlanetService.findById(planetId);
      setPlanetDetails(planet.data);
    } catch (error) {
      alert(`The Planet ID: ${planetId} does not exists.`);
    }
  };

  const residentsId = planetDetails.residents?.map((resi) =>
    resi.split("/", 6).pop()
  );

  return (
    <div className="container m-3">
      <h1 className="fsize-36 fw-600">{planetDetails.name}</h1>
      <hr/>
      <br />
      <div className="d-flex row container justify-content-center">
        {residentsId?.map((r) => (
          <Resident key={r} id={r} planetId={planetId} />
        ))}
      </div>
    </div>
  );
};

export default PlanetDetail;
