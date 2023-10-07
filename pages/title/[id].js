import { useRouter } from "next/router";
import axios from "axios";
import Nav from "@/components/Nav";
import Title from "@/components/Content/Title";
import { useEffect, useState } from "react";
const Page=()=>{
    const router=useRouter();
    const [id,setID]=useState(router.query.id)
    const [titleData,setTitleData]=useState({});
    const [loader,setLoader]=useState(false);
    // useEffect(()=>{
    
    // },[id])
    return(
        <div>
             <Nav/>
             {
                loader?
                <div className="flex justify-center items-center mt-44">
                   Please wait while loading...
                </div>:  
                <Title titleId={router.query.id} />
             }
        </div>
    )
}
export default Page;