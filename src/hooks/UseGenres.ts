import genres from  '../data/Genres'

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}


const UseGenres = () => ({data:genres,errors:null,isLoading:false})

export default UseGenres

