import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";


describe("Input from Search Component", () => {
  test("should be able to render an input", () => {
    render(
      <Search error="" placeholder="Insira o CEP" register={() => {}} />
    );
    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});