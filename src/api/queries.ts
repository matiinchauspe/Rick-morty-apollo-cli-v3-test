import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query GetCharacter($charId: ID!) {
    character(id: $charId) {
      name
      status
      species
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

export const GET_CHARACTERS = gql`
  query GetCharactersCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        species
        image
      }
      info {
        count
        pages
        prev
        next
      }
    }
  }
`;
