import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadPostListFB, addPostListFB } from "./redux/modules/postList";
import { keyframes } from "styled-components";
// import { useParams } from "react-router-dom";
// import {createPostList} from "./redux/modules/postList";

const List = (props) => {
  const navigate = useNavigate(); // 링크 이동 리액트 훅
  // const [count, setCount] = useState(1);
  // const list_count = Array.from({ length: count }, (value, index) => index);

  const data_list = useSelector((state) => state.postList.list); // 전체데이터 => 리턴 전체 데이터(리덕스가 갖고있는 모든데이터)

  // const listIndex = useParams(); // 각 게시글 인덱스 설정
  // const post_list_index = listIndex.index;

  //뷰 테스트용 추가 함수
  // const addCard = () => {
  //   //list_count 써야함
  //   setCount(count + 1);
  // };

  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(loadPostListFB());
  // }, [dispatch]);

  return (
    <CardWrap>
      {data_list.map((list, index) => {
        return (
          <Card key={index}>
            <H3>이름 : {list.word} </H3>
            <H3>분류 : {list.explain} </H3>
            <H3>
              <span style={{ color: "#82b1ff" }}>특징 : {list.example}</span>
            </H3>
          </Card>
        );
      })}
      <div>
        <Button
          onClick={() => {
            navigate("/detail");
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
  margin: 100px auto 0px;
  
`;

const Card = styled.div`
  border: 2px solid #82b1ff;
  border-radius: 10px;
  width: 310px;
  height: 200px;
  margin: 20px;
  padding: 16px;
  float: left;
  overflow-y: auto;
  overflow-x: auto;
  box-sizing: border-box;
  text-align: left;
  display: table-cell;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:not(:nth-child(3n+1)) {
    margin-left: 20px;
  } //n번째 css안주기

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(1, 0, 1, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;

const H3 = styled.p`
  margin-left: 0;
  margin-top: 5%;
`;

// const BtnCross = keyframes`
//   0%{
//     transform: rotate( 0deg );
//   }
//   50%{
//     transform: rotate( 180deg );
//   }
// `;

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
    box-shadow: 0 2px 4px 0 rgba(1, 0, 1, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
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
