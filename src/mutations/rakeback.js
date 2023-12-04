import { gql } from "@apollo/client";

export const UPDATE_RAKE_BACK = gql`
  mutation updateRakeback($addRakeback: Int!) {
    updateRakeback(addRakeback: $addRakeback)
  }
`;
