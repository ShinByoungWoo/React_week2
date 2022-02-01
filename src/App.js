import React, { useReducer } from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { db } from "./firebase";
import List from "./ListPage";
import { useNavigate } from "react-router-dom";
import Detail from "./DetailPage";
import { useDispatch } from "react-redux";
import { loadPostListFB, addPostListFB } from "./redux/modules/postList";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";



function App() {
  // React.useEffect(async () => { //파이어 스토어에 데이터넣는곳
  //   console.log(db);

  //   addDoc(collection(db, 'week2-dic'), {word: 'dd', explain: ' asd', example: 'asd21'})
  // }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadPostListFB());
  }, [dispatch]);

  return (
    <Wrap className="App">
      <div className="contain">
        <Title
          onClick={() => {
            navigate("/");
          }}
        >
          신비한 동물 사전
        </Title>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  
  & .contain {
    width: 1200px;
    margin: 0px auto;
    overflow-x: hidden;
    
  }
`;

const Title = styled.h1`
  width: 100%;
  height: 90px;
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
