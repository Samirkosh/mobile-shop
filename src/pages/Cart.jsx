import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cart = () => {
  const { newPhone } = useSelector((store) => store.myPhone);
  const [selectedPhone, setSelectedPhone] = useState(null);

  useEffect(() => {
    const phoneFromStorage = localStorage.getItem("selectedPhone");
    if (phoneFromStorage) {
      setSelectedPhone(JSON.parse(phoneFromStorage));
    } else if (newPhone) {
      setSelectedPhone(newPhone);
    }
  }, [newPhone]);

  if (!selectedPhone) return <p>No phone selected.</p>;

  return (
    <MobileListContainer>
      <ul>
        <li key={selectedPhone?.id}>
          <img src={selectedPhone?.img} alt={selectedPhone?.name} />
          <h2>{selectedPhone?.name}</h2>
          <h3>{selectedPhone?.price}</h3>

          <StyledLink to="/">go to home</StyledLink>
        </li>
      </ul>
    </MobileListContainer>
  );
};

const MobileListContainer = styled.div`
  width: fit-content;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  li {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px;
    padding: 15px;
    width: 200px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h2 {
    font-size: 1.2em;
    color: #333;
    margin: 10px 0;
  }

  h3 {
    font-size: 1em;
    color: #666;
    margin: 5px 0;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #007bff;
    color: #fff;
  }

  &:hover {
    background-color: #e2e6ea;
  }
`;
