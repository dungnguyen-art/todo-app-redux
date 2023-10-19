import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo";
// import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todosRemainingSelector, searchTextSelector } from "../../redux/selectors";
import todoListSlice from "./TodosSlice"

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todosRemainingSelector); // lay ra tung phan du lieu trong kho chung,
  // const searchText = useSelector(searchTextSelector);
  // console.log("searchText", searchText);
  console.log("todoList", todoList);
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName('');
    setPriority('Medium')
  };
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo key={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
        ))}
      </Col>
      <Col span={24}>
        <Space style={{ display: "flex" }} compact="true">
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space>
      </Col>
    </Row>
  );
}
