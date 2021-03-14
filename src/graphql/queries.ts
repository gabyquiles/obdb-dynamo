/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const nearbyBreweries = /* GraphQL */ `
  query NearbyBreweries($input: NearbyBreweriesInput!) {
    nearbyBreweries(input: $input) {
      items {
        brewery {
          id
          name
          breweryType
          website
          phoneNumber
          webpage
          createdAt
          updatedAt
        }
        distance
      }
    }
  }
`;
export const getBrewery = /* GraphQL */ `
  query GetBrewery($id: ID!) {
    getBrewery(id: $id) {
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
export const listBrewerys = /* GraphQL */ `
  query ListBrewerys(
    $filter: ModelBreweryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrewerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
