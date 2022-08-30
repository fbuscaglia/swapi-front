import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginations = ({ active, totalPages, setPage }) => {
  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={(e) => setPage(e.target.text)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <Pagination>{items}</Pagination>
    </>
  );
};

export default Paginations;
