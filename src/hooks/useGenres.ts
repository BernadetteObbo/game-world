import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_bakground: string; 
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres