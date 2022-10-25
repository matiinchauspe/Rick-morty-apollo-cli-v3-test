import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1) {
      results {
        id
        name
        status
        species
        type
        gender
        location {
          name
        }
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
      type
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
