import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CharactersApp from "./CharactersApp";
import * as api from "../api/get-characters"; // import to mock API
import { describe, expect, test, vi, beforeEach } from "vitest";
import { CharacterType } from "../types/characterType";

// Mock response data
const mockCharactersPage1: CharacterType[] = [
  { url: "1", name: "Character 1" },
  { url: "2", name: "Character 2" },
];
const mockCharactersPage2: CharacterType[] = [
  { url: "3", name: "Character 3" },
  { url: "4", name: "Character 4" },
];

describe("<CharactersApp />", () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.restoreAllMocks();
  });

  test("renders the title 'Characters'", () => {
    render(<CharactersApp />);
    expect(screen.getByRole("heading", { name: /characters/i })).toBeInTheDocument();
  });

  test("renders list of characters on load", async () => {
    vi.spyOn(api, "getCharacters").mockResolvedValueOnce(mockCharactersPage1);

    render(<CharactersApp />);

    for (const character of mockCharactersPage1) {
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }
  });

  test("renders 'Load More Characters' button", () => {
    render(<CharactersApp />);
    expect(screen.getByRole("button", { name: /load more characters/i })).toBeInTheDocument();
  });

  test("clicking 'Load More Characters' loads more and updates page number", async () => {
    // Mock first page
    vi.spyOn(api, "getCharacters").mockResolvedValueOnce(mockCharactersPage1);
    render(<CharactersApp />);

    // Wait for initial characters to show up
    for (const character of mockCharactersPage1) {
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }

    // Mock second page fetch
    (api.getCharacters as vi.Mock).mockResolvedValueOnce(mockCharactersPage2);

    // Click load more
    fireEvent.click(screen.getByRole("button", { name: /load more characters/i }));

    // New characters should appear
    for (const character of mockCharactersPage2) {
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }

    // The updated page number should be displayed
    expect(await screen.findByText(/next page: 2/i)).toBeInTheDocument();
  });
});

