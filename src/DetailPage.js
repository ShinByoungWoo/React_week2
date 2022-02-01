import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadPostListFB, addPostListFB } from "./redux/modules/postList";
// import { createPostList } from "./redux/modules/postList";

const Detail = (props) => {
  const navigate = useNavigate(); // 링크 이동 리액트 훅
  // const listIndex = useParams(); // 각 게시글 인덱스 설정
  // console.log(listIndex);

  //등록 버튼 누르면 추가 되게 하는 함수
  // const AddDictionay = () => {
  // }

  // 단어 설명 예시 값 설정
  const word = React.useRef(null);
  const explain = React.useRef(null);
  const example = React.useRef(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPostListFB());
  }, [dispatch]);

  //카드 추가 함수
  const addCard = () => {
    dispatch(
      addPostListFB({
        word: word.current.value,
        explain: explain.current.value,
        example: example.current.value,
      })
    );
  };

  return (
    <>
      {/* <Title
        onClick={() => {
          navigate("/");
        }}
      >
        신비한 동물 사전
      </Title> */}
      <H2>동물 추가</H2>
      {/* 인풋은 ref로 관리 */}
      <InputDiv>
        <Input type="text" placeholder="이름" ref={word}/>
        <Input type="text" placeholder="분류" ref={explain} />
        <Input type="text" placeholder="특징" ref={example} />
      </InputDiv>
      <BtnDiv>
        <Button
          onClick={() => {
            dispatch(
              addPostListFB({
                word: word.current.value,
                explain: explain.current.value,
                example: example.current.value,
              })
            );
            navigate("/");
          }}
        >
          등록
        </Button>
      </BtnDiv>
    </>
  );
};

// const Title = styled.h1`
//   width: 100%;
//   height: 80px;
//   margin-top: -10px;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   align-items: center;
//   display: flex;
//   -webkit-box-pack: center;
//   -webkit-box-align: center;
//   justify-content: center;
//   background-color: white;
//   border-bottom: 2px solid #4d82cb;

//   cursor: pointer;
// `;

const H2 = styled.h2`
  text-align: center;
`;

const InputDiv = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
  width: 30rem;
  height: 50vh;
  padding-top: 32px;
  margin: 100px auto 0px;
`;

const Input = styled.input`
  margin: 10px auto;
  width: 300px;
  height: 80px;
  /* padding: 20px 20px -15px 20px; */
  display: flex;
  border: 0px solid #82b1ff;
  border-bottom: 2px solid #82b1ff;
  font-size: 20px;
  outline: none;
`;

const Button = styled.button`
  display: block;
  margin: 30px;
  width: 100px;
  height: 50px;
  background-color: #82b1ff;
  border-radius: 10px;
  border: 2px solid #4d82cb;
  font-size: 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
`;

const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Detail;
