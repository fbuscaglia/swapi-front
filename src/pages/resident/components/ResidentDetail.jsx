import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PeopleService } from "../../../service/people";

const ResidentDetail = () => {
  const [residentDetail, setResidentDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getResident();
  }, []);

  const getResident = async () => {
    try {
      const resident = await PeopleService.findById(id);
      setResidentDetail(resident.data);
    } catch (error) {
      alert(`The ID: ${id} does not exists.`);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Card className="card col-10 col-md-6 shadow">
        <Card.Body>
          <Card.Title>
            <h1 className="fsize-26 fw-600">{residentDetail.name}</h1>
          </Card.Title>
          <div className="d-flex row">
            <span>Gender: {residentDetail.gender}</span>
            <span>Eye Color: {residentDetail.eye_color}</span>
            <span>Hair Color: {residentDetail.hair_color}</span>
            <span>Skin Color: {residentDetail.skin_color}</span>
            <span>Mass: {residentDetail.mass}</span>
            <span>Height: {residentDetail.height}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ResidentDetail;
