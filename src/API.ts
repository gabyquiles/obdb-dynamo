/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBreweryInput = {
  id?: string | null,
  name: string,
  breweryType: string,
  website?: string | null,
  phoneNumber?: string | null,
  webpage?: string | null,
  coordinates?: CoordinatesInput | null,
};

export type CoordinatesInput = {
  lat: number,
  lon: number,
};

export type ModelBreweryConditionInput = {
  name?: ModelStringInput | null,
  breweryType?: ModelStringInput | null,
  website?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  webpage?: ModelStringInput | null,
  and?: Array< ModelBreweryConditionInput | null > | null,
  or?: Array< ModelBreweryConditionInput | null > | null,
  not?: ModelBreweryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateBreweryInput = {
  id: string,
  name?: string | null,
  breweryType?: string | null,
  website?: string | null,
  phoneNumber?: string | null,
  webpage?: string | null,
  coordinates?: CoordinatesInput | null,
};

export type DeleteBreweryInput = {
  id?: string | null,
};

export type NearbyBreweriesInput = {
  coordinates: CoordinatesInput,
  km: number,
  limit: number,
};

export type ModelBreweryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  breweryType?: ModelStringInput | null,
  website?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  webpage?: ModelStringInput | null,
  and?: Array< ModelBreweryFilterInput | null > | null,
  or?: Array< ModelBreweryFilterInput | null > | null,
  not?: ModelBreweryFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateBreweryMutationVariables = {
  input: CreateBreweryInput,
  condition?: ModelBreweryConditionInput | null,
};

export type CreateBreweryMutation = {
  createBrewery:  {
    __typename: "Brewery",
    id: string,
    name: string,
    breweryType: string,
    website: string | null,
    phoneNumber: string | null,
    webpage: string | null,
    coordinates:  {
      __typename: "Coordinates",
      lat: number,
      lon: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBreweryMutationVariables = {
  input: UpdateBreweryInput,
  condition?: ModelBreweryConditionInput | null,
};

export type UpdateBreweryMutation = {
  updateBrewery:  {
    __typename: "Brewery",
    id: string,
    name: string,
    breweryType: string,
    website: string | null,
    phoneNumber: string | null,
    webpage: string | null,
    coordinates:  {
      __typename: "Coordinates",
      lat: number,
      lon: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBreweryMutationVariables = {
  input: DeleteBreweryInput,
  condition?: ModelBreweryConditionInput | null,
};

export type DeleteBreweryMutation = {
  deleteBrewery:  {
    __typename: "Brewery",
    id: string,
    name: string,
    breweryType: string,
    website: string | null,
    phoneNumber: string | null,
    webpage: string | null,
    coordinates:  {
      __typename: "Coordinates",
      lat: number,
      lon: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type NearbyBreweriesQueryVariables = {
  input: NearbyBreweriesInput,
};

export type NearbyBreweriesQuery = {
  nearbyBreweries:  {
    __typename: "NearbyBreweriesConnection",
    items:  Array< {
      __typename: "NearbyBreweryConnectionItem",
      brewery:  {
        __typename: "Brewery",
        id: string,
        name: string,
        breweryType: string,
        website: string | null,
        phoneNumber: string | null,
        webpage: string | null,
        createdAt: string,
        updatedAt: string,
      },
      distance: number,
    } >,
  },
};

export type GetBreweryQueryVariables = {
  id: string,
};

export type GetBreweryQuery = {
  getBrewery:  {
    __typename: "Brewery",
    id: string,
    name: string,
    breweryType: string,
    website: string | null,
    phoneNumber: string | null,
    webpage: string | null,
    coordinates:  {
      __typename: "Coordinates",
      lat: number,
      lon: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBrewerysQueryVariables = {
  filter?: ModelBreweryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBrewerysQuery = {
  listBrewerys:  {
    __typename: "ModelBreweryConnection",
    items:  Array< {
      __typename: "Brewery",
      id: string,
      name: string,
      breweryType: string,
      website: string | null,
      phoneNumber: string | null,
      webpage: string | null,
      coordinates:  {
        __typename: "Coordinates",
        lat: number,
        lon: number,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBrewerySubscription = {
  onCreateBrewery:  {
    __typename: "Brewery",
    id: string,
    name: string,
    breweryType: string,
    website: string | null,
    phoneNumber: string | null,
    webpage: string | null,
    coordinates:  {
      __typename: "Coordinates",
      lat: number,
      lon: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBrewerySubscription = {
  onUpdateBrewery:  {
    __typename: "Brewery",
    id: string,
    name: string,
    breweryType: string,
    website: string | null,
    phoneNumber: string | null,
    webpage: string | null,
    coordinates:  {
      __typename: "Coordinates",
      lat: number,
      lon: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBrewerySubscription = {
  onDeleteBrewery:  {
    __typename: "Brewery",
    id: string,
    name: string,
    breweryType: string,
    website: string | null,
    phoneNumber: string | null,
    webpage: string | null,
    coordinates:  {
      __typename: "Coordinates",
      lat: number,
      lon: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
