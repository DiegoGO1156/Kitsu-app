
export const  reqKitsuFind = async(nombre) =>{
    try {
        const resp = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${nombre}/episodes`)    
        const {data} = await resp.json()
        console.log(data)
        return data
       
    } catch (err) {
        console.error(err)
    }
}