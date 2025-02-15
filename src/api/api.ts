import axios from "axios";

// Definim URL-ul de bază al Strapi
const BASE_URL = "http://localhost:1337"; 
const API_URL = `${BASE_URL}/api/projects?populate=*`;

// Creăm o instanță Axios pentru cereri mai organizate
const api = axios.create({
  baseURL: BASE_URL,
});

// Tipizăm răspunsul API
interface ImageFormat {
  url: string;
}

interface Image {
  id: number;
  name: string;
  url: string;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

export interface Project {
  id: number;
  country: string;
  image: Image[];
}

// Funcție pentru a obține albumele (proiectele)
export const getAlbums = async (): Promise<Project[]> => {
  try {
    const response = await api.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
};
