import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ textAlign: "center" }}> 없는 페이지 입니다.</h1>
      <button
        style={{
          padding: "10px",
          display: "block",
          margin: "auto",
          backgroundColor: "red",
          borderRadius: "5px",
          color: 'white'
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </>
  );
};

export default NotFound;
