import React from "react";
import styled from "styled-components";

const NotFound = styled.div`
  margin-top: 40vh;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 5px;
  width: 100px;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  background-color: white;
`;

const Page404 = () => {
  return (
    <NotFound>
      <h1>404 Page Not Found</h1>
      <Button>
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          Back
        </a>
      </Button>
    </NotFound>
  );
};

export default Page404;
