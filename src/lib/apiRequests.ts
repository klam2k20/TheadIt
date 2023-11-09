import axios from "axios";
import { CreateCommunityPayload } from "./schemas/community";

const postCommunity = (name: string) => {
  const payload: CreateCommunityPayload = {
    name: name,
  };

  return axios.post("/api/community", payload)
}

const getCommunity = (name: string) => {
  return axios.get(`api/community?name=${name}`)
}

export {
  getCommunity,
  postCommunity
}