import UseData from "./UseData";
import type { platforms } from "./UseGames";



const UsePlatforms = () => UseData<platforms>('/platforms/lists/parents');

export default UsePlatforms;