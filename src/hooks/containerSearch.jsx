import { useState } from "react"
import { reqKitsuFind } from "../service/animedatafind"

export const containerSearch = ()=>{
    const [animefind, setAnimefind] = useState("")
    const [nombre, setNombre] = useState("")

    const handleAnime = (e, nombre)=>{
        useEffect(() => {
            e.preventDefault()
            reqKitsuFind(nombre).then((data) => {
                setAnimefind(data)
            })
            
        }, [])
        setNombre(nombre)
    }

    return{
        handleAnime,
        nombre,
        animefind
    }
}