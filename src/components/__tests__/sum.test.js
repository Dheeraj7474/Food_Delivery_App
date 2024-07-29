import { render, screen } from "@testing-library/react";
import sum from "../sum";
import { Contact } from "../Contact";
import "@testing-library/jest-dom"; // Ensure this line is correct

test("test sum of 2 items", () => {
    const result = sum("a", "b");
    expect(result).toBe("ab");
});

test("Should load Contact page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading"); // Use getByRole to find the heading element
    expect(heading).toBeInTheDocument();
});

test("Should have button", () => {
    render(<Contact />);

    const button = screen.getByRole("button"); // Use getByRole to find the heading element
    expect(button).toBeInTheDocument();
});



