import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadPostListFB, addPostListFB } from "./redux/modules/postList";

const Add = (props) => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  // 값 설정
  const word = React.useRef(null);
  const explain = React.useRef(null);
  const example = React.useRef(null);

  React.useEffect(() => {
    dispatch(loadPostListFB());
  }, [dispatch]);

  
  return (
    <>
      <H2>동물 추가</H2>
      <InputDiv>
        <Input type="text" placeholder="이름" ref={word} /> 
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
            window.scrollTo({top:0, left:0, behavior:'smooth'});
            window.alert('추가 되었습니다.')
          }}
        >
          등록
        </Button>
      </BtnDiv>
    </>
  );
};

const H2 = styled.h2`
  text-align: center;
`;

const InputDiv = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
  width: 500px;
  height: 350px;
  margin: 0px auto 0px;
`;

const Input = styled.input`
  margin: 10px auto;
  width: 300px;
  height: 80px;
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
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(1, 0, 1, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;

const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Add;
