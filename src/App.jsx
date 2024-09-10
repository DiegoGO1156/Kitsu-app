import { useState } from "react"
import { useEffect } from "react"

export const App = () =>{
    const [anime, setAnime] = useState("")
    const name = "naruto"
    const reqKitsu = async() =>{
        try {
            const resp = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${name}`)    
            const {data} = await resp.json()
            console.log(data)
            const datos = data.map( dato =>({
                titulo:dato.atrributes.titles.en,
                fechaInicio: dato.atrributes.createdAt,
                sinopsis: dato.attributes.synopsis,
                fechaFinal: dato.atrributes.endDate,
                cantidadEp: dato.atrributes.episodeCount,
                img: dato.attributes.posterImage.medium
            }))
            return datos
           
        } catch (err) {
            console.error(err)
        }
    }
    reqKitsu()
    useEffect(()=>{
        reqKitsu().then((data)=>{
            setAnime(data)
        })
    })

    return (
        <>

        </>
    )
}