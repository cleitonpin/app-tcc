import api from "./api";

export interface FranchiseData {
  franchises: {
    latitude: number;
    longitude: number;
    companyName: string;
    street: string;
    distance?: number;
  }[];
}

export const getFranchises = async (
  filter?: string
): Promise<FranchiseData> => {
  const response = await api.get(`/franchises?order=${filter}`);
  return response.data;
};
