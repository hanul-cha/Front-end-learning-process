import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

const deleteToDo = (id) => {
  return{ 
    type: DELETE_TODO, 
    id 
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state ];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id)
    default:
      return state;
  }
}
/* 
  수많은 리엑트에서 스프레드, filter를 사용하는 이유는 state를 직접적으로 수정하지않고
  새로운 obj를 만들어 주기 위함이다. 리액트 자체에서도 경고를 하고 있고
  비동기 적으로 작동하는 state이기 때문에 직접 수정하게 되면 여러 이슈가 발생할수 있다.
*/

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo)
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddToDo(todo);
};

form.addEventListener("submit", onSubmit);