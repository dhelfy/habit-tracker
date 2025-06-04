import { render, screen } from "@testing-library/react"
import { CstmInput } from "./CstmInput"

describe('CstmInput', () => {
    test("Отображает placeholder", () => {
        render(<CstmInput placeholder="Введите текст"/>)
        expect(screen.getByPlaceholderText("Введите текст")).toBeInTheDocument();
    })
})