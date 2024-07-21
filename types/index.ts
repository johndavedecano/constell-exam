export interface UserAddress {
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  country: string;
  postalCode: string;
  state: null | string;
}

export interface Team {
  _id: string;
  name: string;
  color: string;
  abbreviation: string;
  teamPermissions: string[];
}

export interface User {
  _id: string;
  fullName: string;
  displayName: string;
  initials: string;
  email: string;
  phoneNumber: number;
  phoneCountryPrefix: number;
  teamIds: string[];
  image: string;
  address?: UserAddress;
  isEmployee: boolean;
  functionName: string;
  userPermissions: string[];
}

export interface Country {
  country: string;
  code: string;
  iso: string;
}

export type SelectOption = {
  label: string;
  value: number | string;
};

export type QueryFilter = {
  skip: number;
  limit: number;
};
