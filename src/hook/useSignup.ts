import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom"
import { postSignup } from "../libs/axios/userAPI";
// import Modal from "../components/commons/modal";
// import { useState } from "react";


interface FormValues {
    userId: string;
    password: string;
    nickname:string;
}

export const useSignupMutation=()=>{
    const navigate = useNavigate();
    // const [isOpen,setIsOpen]=useState(false)
    // const toggleOverlay=()=>setIsOpen(!isOpen)

    const mutation=useMutation(( formData:FormValues)=>postSignup(formData),{
        onSuccess:(data)=>{
            if(data.status===200){
                navigate('/signin')
                alert("축하합니다^^! 다시 로그인해주세요!")
            } 
        },
        onError:()=>(
            alert("이미 존재하는 계정입니다"))
    }
       )
       return mutation
}
    
