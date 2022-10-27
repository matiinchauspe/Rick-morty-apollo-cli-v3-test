import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
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
  query GetFilteredCharacters($page: Int, $name: String) {
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
