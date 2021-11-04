import { render, screen } from "@testing-library/react"

import Main from "."

describe("<Main />", () => {
  it("should the render header", () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole("heading", { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
