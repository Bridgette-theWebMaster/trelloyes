import React from "react";
import ReactDOM from "react-dom";
import List from "./list";
import App from "./App";
import renderer from "react-test-renderer";

describe("List", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<App.store.list />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
