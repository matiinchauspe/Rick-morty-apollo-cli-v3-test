import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1) {
      results {
        id
        name
        species
        image
      }
    }
  }
`;

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

export const GET_FILTERED_CHARACTERS = gql`
  query GetFilteredCharacters($name: String!) {
    characters(page: 1, filter: { name: $name }) {
      results {
        id
        name
        species
        image
      }
    }
  }
`;
