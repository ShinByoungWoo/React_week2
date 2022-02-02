import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Actions 프로젝트명/ 모듈 명/ 액션 명
const CREATE = "postList/CREATE";
const LOAD = "postList/LOAD";
const UPDATE = "postList/UPDATE";
const DELETE = "postList/DELETE";

//초기값
const initialState = {
  list: [],
};

// Action Creators
export function createPostList(postList) {
  return { type: CREATE, postList };
}

export function loadPostList(postList) {
  return { type: LOAD, postList };
}

export function upDatePostList(postList_index, updateList) {
  return { type: UPDATE, postList_index, updateList };
}

export function deletePostList(postList_index, deleteList) {
  return { type: DELETE, postList_index, deleteList };
}

//Middlewear 미들웨어 함수 //파이어베이스와 연결

//추가하기
export const addPostListFB = (postList) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "week2-mydictionary"), postList);
    const post_list = { id: docRef.id, ...postList };
    dispatch(createPostList(post_list));
  };
};

//읽어오기
export const loadPostListFB = () => {
  return async function (dispatch) {
    const postList_data = await getDocs(collection(db, "week2-mydictionary"));

    let post_list = [];
    postList_data.forEach((week2) => {
      post_list.push({ id: week2.id, ...week2.data() }); //수정 삭제를 위해 ID값도 가져오기
    });
    dispatch(loadPostList(post_list));
  };
};

//수정하기
export const upDatePostListFB = (postList_id, updateList) => {
  return async function (dispatch, getState) {
    if (!postList_id) {
      window.alert("아이디가 없네요!");
      return;
    }
    const edit_data = doc(db, "week2-mydictionary", postList_id);
    await updateDoc(edit_data, updateList);

    const _postList = getState().postList.list;
    const postList_index = _postList.findIndex((post) => {
      return post.id === postList_id;
    });
    dispatch(upDatePostList(postList_index, updateList));
  };
};

//삭제하기
export const deletePostListFB = (postList_id, deleteList) => {
  return async function (dispatch, getState) {
    if (!postList_id) {
      window.alert("아이디가 없네요!");
      return;
    }
    const delete_data = doc(db, "week2-mydictionary", postList_id);
    await deleteDoc(delete_data);

    const _postList = getState().postList.list;
    const postList_index = _postList.findIndex((post) => {
      return post.id === postList_id;
    });
    dispatch(deletePostList(postList_index, deleteList));
  };
};



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "postList/CREATE": {
      const new_postList = [...state.list, action.postList];
      return { list: new_postList };
    }

    case "postList/LOAD": {
      return { list: action.postList };
    }

    case "postList/UPDATE": {
      const update_postList = state.list.map((list, index) => {
        if (parseInt(action.postList_index) === index) {
          return action.updateList 
        } else {
          return list;
        }
      });
      return { list: update_postList };
    }

    case "postList/DETELE": {
      const delete_postList = state.list.filter((list, index) => {
        return parseInt(action.postList_index) !== index;
      });
      return { list: delete_postList};
    }

    default:
      return state;
  }
}
