import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders header logo", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    const header = screen.getByRole("banner");
    expect(
        within(header).getByAltText(/little lemon logo/i)
    ).toBeInTheDocument();
});
