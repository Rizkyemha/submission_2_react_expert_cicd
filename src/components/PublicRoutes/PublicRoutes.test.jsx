import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import PublicRoutes from "./PublicRoutes";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../states/store";

describe("public routes", () => {
  it("should render correctly", () => {
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <PublicRoutes />
        </BrowserRouter>
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
