import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addPhone } from "../store/PhoneSlice";

export const MobileList = () => {
  const dispatch = useDispatch();
  const { phoneShop } = useSelector((store) => store.myPhone);
  const navigate = useNavigate();

  const handlerNavigate = (item) => {
    dispatch(addPhone(item));
    localStorage.setItem("selectedPhone", JSON.stringify(item));
    navigate(`/cart/${item.id}`);
  };
  return (
    <MobileListContainer>
      <ul>
        {phoneShop.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <button onClick={() => handlerNavigate(item)}>more</button>
          </li>
        ))}
      </ul>
    </MobileListContainer>
  );
};

const MobileListContainer = styled.div`
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

  button {
    font-size: 1rem;
    color: #007bff;
    padding: 8px 15px;
    border-radius: 5px;
    border: none;
    transition: background-color 0.3s ease;

    &.active {
      background-color: #007bff;
      color: #fff;
    }

    &:hover {
      background-color: #e2e6ea;
    }
  }
`;
