import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { BookingConfirmedPage } from "./index";

describe("BookingConfirmedPage", () => {
    test("shows confirmation heading and footer landmark", () => {
        render(
            <MemoryRouter>
                <BookingConfirmedPage />
            </MemoryRouter>,
        );

        expect(
            screen.getByRole("heading", {
                name: /your reservation has been confirmed/i,
            }),
        ).toBeInTheDocument();
        expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });
});
