import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

// Actions 프로젝트명/ 모듈 명/ 액션 명
// const LOAD = "my_dictionart/widgets/LOAD"; // 서버에서 가지고올때 사용
const CREATE = "postList/CREATE"; // 추가하기 기능
// const UPDATE = "my_dictionart/widgets/UPDATE";
// const REMOVE = "my_dictionart/widgets/REMOVE";
const LOAD = "postList/LOAD";

//초기값
const initialState = {
  list: [
    // { word: "테스트1 단어", explain: "테스트1 설명", example: "테스트1 예시" },
    // { word: "테스트2 단어", explain: "테스트2 설명", example: "테스트2 예시" },
    // { word: "테스트3 단어", explain: "테스트3 설명", example: "테스트3 예시" },
    // {
    //   word: "테스트4 단어",
    //   explain: "테스트4 설명",
    //   example: "테스aasdasdasdsad트4 예시",
    // },
  ],
};
// Action Creators
export function loadPostList(postList) {
  //파이어 스토어랑 연결할 액션
  return { type: LOAD, postList };
}

export function createPostList(postList) {
  return { type: CREATE, postList };
}

// export function loadWidgets() {
//     return { type: LOAD };
//     }

//     export function createWidget(widget) {
//     return { type: CREATE, widget };
//     }

//     export function updateWidget(widget) {
//     return { type: UPDATE, widget };
//     }

//     export function removeWidget(widget) {
//     return { type: REMOVE, widget };
//     }

//Middlewear 미들웨어 함수

//읽어오기
export const loadPostListFB = () => {
  return async function (dispatch) {
    const postList_data = await getDocs(collection(db, "week2-mydictionary"));
    // console.log(postList_data);

    let post_list = [];
    postList_data.forEach((post) => {
      post_list.push({ id: post.id, ...post.data() });
      // console.log(post.data())
    });
    // console.log(post_list)
    dispatch(loadPostList(post_list));
  };
};

//추가하기
export const addPostListFB = (postList) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "week2-mydictionary"), postList); // 맨위 포스트리스트 >> 이그잼플, 익스플레인,우드로변경시도
    const _postList = await getDoc(docRef)
    const post_list = { id: _postList.id, ..._postList.data() };
    // console.log(post_list)
    dispatch(createPostList(post_list));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  // state = {}, action = {} 기본값 주는것 오류방지하기 위한 설정임
  switch (action.type) {
    case "postList/LOAD": {
      return { list: action.postList };
    }
    case "postList/CREATE": {
      const new_postList = [...state.list, action.postList]; // 위에 설정된 초기값의 리스트와 액션의 값
      return { list: new_postList };
    }
    default:
      return state;
  }
}

// // side effects, only as applicable  // 미들웨어
// // e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
