export const App = () =>{

    const reqKitsu = async() =>{
        try {
            const resp = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=naruto`)    
            const data = await resp.json()
            console.log(data)
           
        } catch (err) {
            console.error(err)
        }
    }
    const {data} = reqKitsu()
    console.log(data)

}