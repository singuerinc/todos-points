import { ITodo } from "./ITodo";

interface IUser {
  name: string;
  avatar: string;
  points: {
    today: number;
    week: number;
  };
  todos: ITodo[];
}

export { IUser };
