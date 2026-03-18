import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders header logo", () => {
    render(<App />);
    const header = screen.getByRole("banner");
    expect(
        within(header).getByAltText(/little lemon logo/i)
    ).toBeInTheDocument();
});
