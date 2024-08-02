/**
 * @jest-environment jsdom
 */

import App from "./App.tsx";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import * as React from "react";

describe(App, () => {
  it("check for heading", async () => {
    const { getByText } = render(<App />);
    const text = getByText("Component Library");
    expect(text.className).toContain("page_title");
  });

  it("should contain heading of Component Library", async () => {
    const { getAllByText } = render(<App />);
    const text = getAllByText("Component Library");
    for (let node of text) {
      expect(node.textContent).toContain("Component Library");
    }
  });
});
