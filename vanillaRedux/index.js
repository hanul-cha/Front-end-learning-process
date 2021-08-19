import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {//reducer라고 불림 함수의 형태여야함, 여기서 데이터 형태를 변환시킴
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier); //state를 저장하는 저장소가 될것임, reducer를 호출해줘야함

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange); //data에 변화가 있을때마다 호출해줄것임

const handleAdd = () => {
  countStore.dispatch({ type:ADD })//액션을 디스페치로 연결해주었음
}

const handleMinus = () => {
  countStore.dispatch({ type:MINUS })
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);



