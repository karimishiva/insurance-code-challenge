export interface userInfo {
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
}

export interface thirdInsuranceStore {
  company: string;
  discount: {
    insurance: string;
    person: string;
  };
  vehicle: {
    type: string;
    usage: string;
  };
}
