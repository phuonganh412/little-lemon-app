import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header logo", () => {
    render(<App />);
    expect(screen.getByAltText(/little lemon logo/i)).toBeInTheDocument();
});
