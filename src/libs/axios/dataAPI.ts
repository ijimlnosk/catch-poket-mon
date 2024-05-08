import { userDataInstance } from "./axiosInstance"

interface PokeRequest {
    id:number,
    type:string,
    name:string,
    url:string 
    background:string,

}
//포켓몬 포획 / 저장
export const postData = async(postPokeData: PokeRequest ,auth:boolean=true)=>{
    const postDataResponse = await userDataInstance.post("/data",postPokeData,{
        params:{
            auth:auth
        }
    })
    return postDataResponse.data
}

//포획한 포켓몬 불러오기
export const getData = async(getPokeData:PokeRequest, auth:boolean=true)=>{
    const getDataResponse= await userDataInstance.get("/data",{
        params:{
            getPokeData,
            auth:auth
        }
    })
    return getDataResponse.data
}

//포획된 포켓몬 놓아주기
export const deleteData = async(deletePokeData:PokeRequest)=>{
    const deleteDataResponse = await userDataInstance.delete("/data",deletePokeData)
    return deleteDataResponse.data
}