import { useQuery } from "@tanstack/react-query";
import getAbout from "../services/getAbout";

function useEvolution(url) {
  return useQuery(["pokemonEvolutions", url], async () => {
    const data = await getAbout(url);
    return data;
  });
}
export default useEvolution;
