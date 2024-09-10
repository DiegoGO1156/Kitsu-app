import { useEffect, useState } from "react"
import { reqKitsu } from "../service/animedata"

export const containerData = () =>{
    const [anime, setAnime] = useState("")
    const [page, setPage] = useState(0)

    useEffect(() => {
        reqKitsu().then((data)=>{
            setAnime(data)
        })
    }, [])

    useEffect(() => {
        reqKitsu(page).then(data => setAnime(data));
      }, [page]);

    return {
        anime,
        setPage,
        page
    }
}