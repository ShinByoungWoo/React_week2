import React from "react";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router-dom";
import List from "./ListPage";
import Detail from "./Detail";
import Add from "./AddPage";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { loadPostListFB } from "./redux/modules/postList";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    dispatch(loadPostListFB());
  }, [dispatch]);

  return (
    <Wrap className="App">
        <Title
          onClick={() => {
            navigate('/')
            window.scrollTo({top:0, left:0, behavior:'smooth'});
          }}
        >
          신비한 동물 사전
        </Title>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/detail/:index" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 100px auto;
  justify-content: center;
  align-items: center;
  transition: 1s;
`;

const Title = styled.h1`
  width: 100%;
  height: 80px;
  margin-top: -10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: white;
  border-bottom: 3px solid #4d82cb;
  cursor: pointer;
  text-shadow: 0 0 2px #4d82cb;

  & hr {
    width: 100%;
  }
`;

export default App;
