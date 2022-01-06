import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";


describe("Button from Search Component", () => {
  test("should be able to render an input", () => {
    render(
      <Search name="search" error="" register={() => {}} />
    );
    expect(screen.getByText("Buscar pelo CEP")).toBeTruthy();
  });
});