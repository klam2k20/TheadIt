import axios from "axios";
import { CommunityInfoResponse, CreateCommunityPayload } from "./schemas/community";

const postCommunity = (name: string) => {
  const payload: CreateCommunityPayload = {
    name: name,
  };

  return axios.post("/api/community", payload)
}

const getCommunity = async (name: string): Promise<CommunityInfoResponse> => {
  return axios.get(`/api/community?name=${name}`).then((data) => data.data)
}

export {
  getCommunity,
  postCommunity
}