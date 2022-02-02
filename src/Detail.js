import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostList,
  upDatePostList,
  loadPostListFB,
  deletePostListFB,
  upDatePostListFB,
} from "./redux/modules/postList";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const post_list_index = params.index;
  const edit_list = useSelector((state) => state.postList.list);
  const word = React.useRef(edit_list[post_list_index].word);
  const explain = React.useRef(edit_list[post_list_index].explain);
  const example = React.useRef(edit_list[post_list_index].example);

  React.useEffect(() => {
    dispatch(loadPostListFB());
  }, [dispatch]);


  return (
    <Wrap>
      <Title
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        신비한 동물 사전
      </Title>
      <H2> {parseInt(post_list_index) + 1}번째 동물 수정</H2>
      <CardWrap>
        <Card>
          <Input
            type="text"
            placeholder={
              edit_list[post_list_index] ? edit_list[post_list_index].word : ""
            }
            ref={word}
          />
          <Input
            type="text"
            placeholder={
              edit_list[post_list_index]
                ? edit_list[post_list_index].explain
                : ""
            }
            ref={explain}
          />
          <Input
            type="text"
            placeholder={
              edit_list[post_list_index]
                ? edit_list[post_list_index].example
                : ""
            }
            ref={example}
          />
        </Card>
      </CardWrap>
      <BtnDiv>
        <EditButton
          onClick={() => {
            dispatch(
              upDatePostListFB(edit_list[post_list_index].id, {
                word: word.current.value,
                explain: explain.current.value,
                example: example.current.value,
                id: edit_list[post_list_index].id
              })
            );
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            window.alert("수정 되었습니다.");
            navigate("/");
          }}
        >
          수정하기
        </EditButton>

        <DeleteButton
          onClick={() => {
            dispatch(deletePostListFB(edit_list[post_list_index].id));
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            window.alert("삭제 되었습니다.");
            navigate("/");
          }}
        >
          삭제하기
        </DeleteButton>
      </BtnDiv>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 100px auto;
  justify-content: center;
  align-items: center;
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
  border-bottom: 3px solid #9c0000;
  cursor: pointer;
  text-shadow: 0 0 2px #d60000;

  & hr {
    width: 100%;
  }
`;

const CardWrap = styled.div`
  width: 500px;
  display: flex;
  margin: auto;
  align-content: center;
  justify-content: center;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Card = styled.div`
  border: 2px solid #9c0000;
  border-radius: 10px;
  width: 500px;
  height: 350px;
  margin: auto;
  padding: 16px;
  overflow: auto;
  box-sizing: border-box;
  text-align: left;
  display: table-cell;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    box-shadow: 0 2px 4px 0 rgba(1, 0, 1, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Input = styled.input`
  margin: 10px auto;
  width: 300px;
  height: 80px;
  display: flex;
  border: 0px solid #9c0000;
  border-bottom: 2px solid #9c0000;
  font-size: 20px;
  outline: none;
`;

const BtnDiv = styled.div`
  width: 250px;
  margin: 0px auto;
`;

const EditButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ff8a80;
  border-radius: 10px;
  border: 2px solid #d60000;
  font-size: 16px;
  cursor: pointer;
  color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(1, 0, 1, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;

const DeleteButton = styled.button`
  margin:30px 0px 0px 50px ;
  width: 100px;
  height: 50px;
  background-color: #9c0000;
  border-radius: 10px;
  border: 2px solid #d60000;
  font-size: 16px;
  cursor: pointer;
  color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(1, 0, 1, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;

export default Detail;
