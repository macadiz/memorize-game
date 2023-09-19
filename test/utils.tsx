import { RenderOptions, render } from "@testing-library/react";
import { FC, PropsWithChildren, ReactElement } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return children;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

// override render method
export { customRender as render };
