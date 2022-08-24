import { useQuery } from "@tanstack/react-query";
import getPokemonDetail from "../services/getPokemonDetail";
import generateRandomPokemon from "../utils/generateRandomPokemon";

function usegetPokemon(url) {
  const randomId = generateRandomPokemon(1, 1156);
  return (
    useQuery(["todayPokemon"], url),
    async () => {
      const data = await getPokemonDetail(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      return data;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false, // ekrana geri döndüğünde tekrardan fetch işlemini çalştrma
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24, // cacheTime ' n staleTime'dan büyük olmaması önerilir çünkü baat veriyi cachede tutmak saçma
    }
  );
}
export default usegetPokemon;
