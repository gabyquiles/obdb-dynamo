/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBrewery = /* GraphQL */ `
  mutation CreateBrewery(
    $input: CreateBreweryInput!
    $condition: ModelBreweryConditionInput
  ) {
    createBrewery(input: $input, condition: $condition) {
      id
      name
      breweryType
      website
      phoneNumber
      webpage
      coordinates {
        lat
        lon
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBrewery = /* GraphQL */ `
  mutation UpdateBrewery(
    $input: UpdateBreweryInput!
    $condition: ModelBreweryConditionInput
  ) {
    updateBrewery(input: $input, condition: $condition) {
      id
      name
      breweryType
      website
      phoneNumber
      webpage
      coordinates {
        lat
        lon
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBrewery = /* GraphQL */ `
  mutation DeleteBrewery(
    $input: DeleteBreweryInput!
    $condition: ModelBreweryConditionInput
  ) {
    deleteBrewery(input: $input, condition: $condition) {
      id
      name
      breweryType
      website
      phoneNumber
      webpage
      coordinates {
        lat
        lon
      }
      createdAt
      updatedAt
    }
  }
`;
