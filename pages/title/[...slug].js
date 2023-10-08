import { useRouter } from "next/router";
import axios from "axios";
import Nav from "@/components/Nav";
import Title from "@/components/Content/Title";
import { useEffect, useState } from "react";
const Page=()=>{
    const router=useRouter();
    const [titleData,setTitleData]=useState({});
    const [loader,setLoader]=useState(false);
 
    // console.log(router.query.slug,"iuij");
    return(
        <div>
             <Nav/>
             {
                    !router.query.slug ? (
                        <div className="flex justify-center items-center mt-44">
                        Please wait while loading...
                        </div>
                    ) : router.query.slug.length >= 3 ? (
                        <Title
                        titleId={router.query.slug[0]}
                        season={router.query.slug[1]}
                        episode={router.query.slug[2]}
                        />
                    ) : router.query.slug.length === 2 ? (
                        <Title
                        titleId={router.query.slug[0]}
                        season={router.query.slug[1]}
                        />
                    ) : (
                        <Title titleId={router.query.slug[0]} />
                    )
                    }

        </div>
    )
}
export default Page;