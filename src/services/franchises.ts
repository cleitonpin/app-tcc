import api from "./api";

export interface FranchiseData {
  franchises: {
    latitude: number;
    longitude: number;
    companyName: string;
    street: string;
  }[];
}

export const getFranchises = async (): Promise<FranchiseData> => {
  const response = await api.get("/franchises");
  return response.data;
};
