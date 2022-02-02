import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const List = (props) => {
  const navigate = useNavigate();

  const data_list = useSelector((state) => state.postList.list);

  return (
    <CardWrap>
      {data_list.map((list, index) => {
        return (
          <Card
            key={index}
            onClick={() => {
              navigate("/detail/" + index);
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <H3>이름 : {list.word} </H3>
            <hr></hr>
            <H3>분류 : {list.explain} </H3>
            <H3>
              <span style={{ color: "#82b1ff" }}>특징 : {list.example}</span>
            </H3>
          </Card>
        );
      })}
      <div>
        <Button
          className="cross"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            navigate("/add");
          }}
        >
          <Span></Span>
          <Span2></Span2>
        </Button>
      </div>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  width: 1200px;
  flex-wrap: wrap;
  margin: auto;
`;

const Card = styled.div`
  border: 2px solid #82b1ff;
  border-radius: 10px;
  width: 310px;
  height: 200px;
  margin: 20px;
  padding: 16px;
  float: left;
  overflow: auto;
  box-sizing: border-box;
  text-align: left;
  display: table-cell;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:not(:nth-child(3n + 1)) {
    margin-left: 50px;
  }

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(1, 0, 1, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;

const H3 = styled.p`
  margin-left: 0;
  margin-top: 5%;
`;

const key = keyframes`

    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(90deg);
    }
  
`;

const Button = styled.button`
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #82b1ff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    animation: ${key} 1s linear alternate;
  }
`;

const Span = styled.span`
  background: white;
  height: 30px;
  position: relative;
  width: 5px;
`;

const Span2 = styled.span`
  background: white;
  height: 5px;
  left: 10px;
  position: absolute;
  top: 22px;
  width: 30px;
`;

export default List;
