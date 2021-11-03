import { render, screen } from "@testing-library/react"

import Main from "."

describe("<Main />", () => {
  it("should the render header", () => {
    render(<Main />)

    expect(
      screen.getByRole("heading", { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
