const limit = 20
export const  reqKitsu = async(page) =>{
    try {
        const resp = await fetch(`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${page * 20}`)    
        const {data} = await resp.json()
        console.log(data)
        return data
       
    } catch (err) {
        console.error(err)
    }
}
