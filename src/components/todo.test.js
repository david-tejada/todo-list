import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Todo from "./todo";

configure({ adapter: new Adapter() });

const pendingTodo = {
  content: "This is a pending todo",
  id: "25fac6bd-da12-48c8-b76b-74612c09e4bd",
  completed: false,
};

const completedTodo = {
  content: "This is a completed todo",
  id: "25fac6bd-da12-48c8-b76b-74617c09e4bd",
  completed: true,
};

it("renders the todo item", () => {
  const wrapper = shallow(<Todo todo={pendingTodo} />);
  expect(wrapper.find("#completed").prop("checked")).toBe(false);
  expect(wrapper.find("#completed").prop("todo")).toBe(pendingTodo);
});

it("renders the pending todo list item with the right class", () => {
  const wrapper = shallow(<Todo todo={pendingTodo} />);
  expect(wrapper.find("li").prop("className")).toBe("todo");
});

it("renders the completed todo list item with the right class", () => {
  const wrapper = shallow(<Todo todo={completedTodo} />);
  expect(wrapper.find("li").prop("className")).toBe("todo todo-completed");
});
