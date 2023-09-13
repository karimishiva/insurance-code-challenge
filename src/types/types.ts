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
export type vehicleUsage = {
  id: number;
  title: string;
}[];
export type getVehicleType = {
  data: {
    id: number;
    title: string;
    usages: vehicleUsage;
  }[];
};
