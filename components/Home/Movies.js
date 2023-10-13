import axios from "axios";
import { useEffect, useState } from "react";
const Movies=()=>{
    const [items,setItems]=useState([]);
    const [data,setData]=useState([]);
    useEffect(()=>{
      const getData=async()=>{
        await axios.post('/api/getPopularMovies')
           .then((response)=>{
              console.log("Resp from backend-->",response);
              if(response.data.error==false)
                setItems(response.data.data);
           })
      }
      getData();
    },[])
    useEffect(()=>{
        let tempArr=[];
        const getDetails=async(exid)=>{
            let id=exid.split('/');
                let sdata={
                 titleId:id[2]
                }
                   await axios.post('/api/overview',sdata)
                     .then((response)=>{
                         console.log("From backend-->",response.data);
                         if(response.data.error==false) 
                         {
                          setData((prevData) => [...prevData, response.data.data]);
                          }
                        })
        }
        if(items.length>0)
        {
               for(let i=0;i<10;i++)
               {
                  //  getDetails(items[i]);  
               }
        }
    },[items])
  
    return(
      <div>
          {
            data.length>0?
            <div className="mx-5 mt-5 grid md:grid-cols-6 lg:grid-cols-10 space-y-5 space-x-3">
                  {
                     data.map((x)=>
                      <div className="cursor-pointer">
                         <img src={`${x.title.image?x.title.image.url:''}`} style={{height:275}} className="rounded-2xl hover:rounded-sm"/>
                      </div>  
                     )
                  }
            </div>
            :
            <div className="mt-40 text-center">
                Please wait while loading....
            </div>        
          }
      </div>
    )
}
export default Movies;