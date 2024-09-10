import { containerData } from "../hooks/containerData"
import { containerSearch } from "../hooks/containersearch"
import { Container } from "./Container"
import { FindContainer } from "./FindContainer"
import { Search } from "./Search"

export const App = () =>{
    const {anime, setPage, page} = containerData()
    const {handleAnime} = containerSearch()
    return (
        <>
            <Search handleAnime= {handleAnime}/>
            {anime ? (<Container anime = {anime} setPage = {setPage} page = {page}/>) : (<FindContainer />)}
        </>
    )
}
