import axios from "axios";

const API = "http://localhost:3001/todos";

//Actions
const SET_TODOS = "setTodos";
const ADD_TODO = "addTodo";
const DELETE_TODO = "deleteTodo";
const TOGGLE_TODO = "toggleTodo";
const UPDATE_TODO = "updateTodo";
const GET_TODO = "getTodo";

//Action Creators
export const setTodos = (payload) => {
  return {
    type: SET_TODOS,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const getTodo = (payload) => {
  return {
    type: GET_TODO,
    payload,
  };
};

//Thunks
export const fetchTodosThunk = () => async (dispatch) => {
  const res = await axios.get(API);
  dispatch(setTodos(res.data));
};

export const addTodoThunk =
  ({ task, description }) =>
  async (dispatch) => {
    const newTodo = {
      task,
      description,
      completed: false,
      date: new Date().toDateString(),
    };
    const res = await axios.post(API, newTodo);
    dispatch(addTodo(res.data));
  };

export const toggleTodoThunk = (todo) => async (dispatch) => {
  const res = await axios.patch(`${API}/${todo.id}`, {
    completed: !todo.completed,
  });
  dispatch(toggleTodo(res.data));
};

export const deleteTodoThunk = (id) => async (dispatch) => {
  await axios.delete(`${API}/${id}`);
  dispatch(deleteTodo(id));
};

export const updateTodoThunk = (id, updatedFields) => async (dispatch) => {
  const res = await axios.put(`${API}/${id}`, updatedFields);
  dispatch(updateTodo(res.data));
};

export const fetchSingleTodoThunk = (id) => async (dispatch) => {
  const res = await axios.get(`${API}/${id}`);
  dispatch(getTodo(res.data));
};
// Reducer
const initialState = {
  todosList: [],
  currentTodo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todosList: action.payload };
    case ADD_TODO:
      return { ...state, todosList: [...state.todosList, action.payload] };
    case DELETE_TODO:
      return {
        ...state,
        todosList: state.todosList.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todosList: state.todosList.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todosList: state.todosList.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case GET_TODO:
      return { ...state, currentTodo: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
