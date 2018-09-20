import * as React from "react";
import styled from "styled-components";
import { ITodo } from "../../core/ITodo";

interface IProps {
  todos: ITodo[];
  theme: string[];
}

interface ITodoProps {
  todo: ITodo;
  theme: string[];
}

interface ITodoState {
  done: boolean;
}

const check = (isChecked: boolean) => () => ({ done: isChecked });

class Todo extends React.Component<ITodoProps, ITodoState> {
  constructor(props: ITodoProps) {
    super(props);
    this.state = {
      done: props.todo.done
    };
  }

  public render() {
    const { todo, theme } = this.props;
    const { done } = this.state;
    return (
      <TodoWrapper>
        <Checkbox onClick={() => this.handleInputChange(!done)} done={done} />
        <TodoTitle done={done}>{todo.title}</TodoTitle>
        <TodoPoints theme={theme}>
          (+
          {todo.points})
        </TodoPoints>
      </TodoWrapper>
    );
  }

  private handleInputChange = (done: boolean) => {
    this.setState(check(done));
  };
}

const Todos = ({ todos, theme }: IProps) => (
  <TodosWrapper>
    {todos.map((t, idx) => (
      <Todo key={idx} todo={t} theme={theme} />
    ))}
  </TodosWrapper>
);

const Checkbox = styled.span<{ done: boolean }>`
  position: relative;
  height: 25px;
  width: 25px;
  border: 1px dashed white;
  background-color: transparent;
  margin-right: 1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:after {
    content: "";
    position: absolute;
    display: ${props => (props.done ? "block" : "none")};
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const TodosWrapper = styled.div`
  margin: 2rem;
`;

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TodoTitle = styled.div<{ done: boolean }>`
  text-decoration: ${props => (props.done ? "line-through" : "none")};
  font-size: 2rem;
  color: white;
`;

const TodoPoints = styled.div<{ theme: string[] }>`
  font-size: 1.5rem;
  color: ${props => props.theme[2]};
  margin-left: 1rem;
`;

export { Todos };
