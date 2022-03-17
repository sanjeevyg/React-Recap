import { render } from "@testing-library/react";
import React from "react";
import App from './App';

test("h1 content", () => {
  const { getByText } = render(<App />);
  const h1 = getByText('This is react!');
  expect(h1).toHaveTextContent('This is react!')
})
