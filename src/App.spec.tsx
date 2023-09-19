import { render } from "../test/utils";
import App from "./App";
import "./App.css";

describe("App component", () => {
  it("Show have hello world", () => {
    const component = render(<App />);

    expect(component.getByText("Hello Vite")).toBeDefined();
  });
});
