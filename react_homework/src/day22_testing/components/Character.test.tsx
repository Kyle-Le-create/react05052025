import { describe, expect, test } from "vitest";
import {render, screen} from '@testing-library/react';
import Character from "./Character";
import { CharacterType } from "../types/characterType";

// Mocks
const mockCharacter ={
  name: "Jon Snow",
  aliases: ["Lord Snow"],
  culture: "Northmen",
  books: ["book1", "book2", "book3"],
}

const aliasOnlyCharacter = {
  name: "",
  aliases: ["The Hound"],
  culture: "Riverlands",
  books: ["book1"],
}

describe("<Character />", () => {
  test('shows fields for "name" and "culture"', async () => {
    render(<Character character={mockCharacter as CharacterType}/>);
    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("culture")).toBeInTheDocument();
  });
  test("shows culture if it is present", async () => {
    render(<Character character={mockCharacter as CharacterType}/>);
    expect(screen.getByText("Northmen")).toBeInTheDocument();
  });
  test("shows alias if no name is present", async () => {
    render(<Character character={aliasOnlyCharacter as CharacterType}/>);
    expect(screen.getByText("The Hound")).toBeInTheDocument();
  });
  test("shows how many books this characters made an appearance in", async () => {
    render(<Character character={mockCharacter as CharacterType}/>);
    expect(screen.getByText("Number of Books:")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
