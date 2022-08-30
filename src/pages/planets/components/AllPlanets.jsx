import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Paginations from "./Paginations";

const AllPlanets = ({ planets, page, setPage, totalPlanets }) => {
  const totalPages = totalPlanets / 10;
  const navigate = useNavigate();

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Diameter</th>
            <th>Gravity</th>
            <th>Population</th>
            <th>Surface</th>
            <th>Terrain</th>
          </tr>
        </thead>
        <tbody>
          {planets?.map((planet) => (
            <tr
              key={planet.name}
              onClick={() =>
                navigate(`/planets/${planet.url.split("/", 6).pop()}`)
              }
            >
              <td>{planet.name}</td>
              <td>{planet.diameter}</td>
              <td>{planet.gravity}</td>
              <td>{planet.population}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.terrain}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Paginations active={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default AllPlanets;
