import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { PeopleService } from "../../service/people";

const Resident = ({ id }) => {
  const [residentDetail, setResidentDetail] = useState({});
  const navigate = useNavigate();

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
    <Card className="col-8 col-md-4 m-2 shadow">
      <Card.Body>
        <Card.Title>{residentDetail.name}</Card.Title>
        <Card.Text>
          Gender: {residentDetail.gender}
          <br />
          Height: {residentDetail.height}
          <br />
          Mass: {residentDetail.mass}
        </Card.Text>
        <Button
          variant="light"
          className="btn-green color-black"
          onClick={() => 
            navigate(`${id}`)
          }
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Resident;
