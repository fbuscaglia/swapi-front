import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const Search = ({ setPlanetFiltered, planets }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setPlanetFiltered(planets);
    setPlanetFiltered((prev) =>
      prev.filter(
        (p) =>
          p.name.toLowerCase().includes(text.toLowerCase()) ||
          p.population.toLowerCase().includes(text.toLowerCase())
      )
    );
  }, [text]);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group className="mb-3" controlId="formBasicSearch">
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="planet"
          placeholder="Search planet"
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
