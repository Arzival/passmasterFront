import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginsend = async (email:String, password:String) => {
  try {
    const response = await axios.post(API_URL+'login', {
        email,
        password
    });
    return response.data;
  } catch (error : any) {
    return error.response.data;
  }
};