import axios from "axios";
import { useEffect, useState } from "react";
let demo=[
    {
        "id": "/title/tt0110912/",
        "image": {
            "height": 1536,
            "id": "/title/tt0110912/images/rm1959546112",
            "url": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
            "width": 1055
        },
        "title": "Pulp Fiction",
        "titleType": "movie",
        "year": 1994
    },
    {
        "id": "/title/tt0069134/",
        "image": {
            "height": 1205,
            "id": "/title/tt0069134/images/rm3661160705",
            "url": "https://m.media-amazon.com/images/M/MV5BZTExMDg2YmMtZGIxYi00ODQyLTkxMWUtNjkwNWI1MWVjNDBlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
            "width": 800
        },
        "title": "Pulp",
        "titleType": "movie",
        "year": 1972
    },
    {
        "id": "/title/tt26940959/",
        "image": {
            "height": 908,
            "id": "/title/tt26940959/images/rm253320961",
            "url": "https://m.media-amazon.com/images/M/MV5BMzc5OGNiZmUtMmY2OC00ZmIwLTkzYjMtNzJhZTYxMjE0MTU0XkEyXkFqcGdeQXVyOTgyNTg5OTc@._V1_.jpg",
            "width": 1538
        },
        "title": "Stealing Pulp Fiction",
        "titleType": "movie"
    },
    {
        "id": "/title/tt8306938/",
        "image": {
            "height": 2039,
            "id": "/title/tt8306938/images/rm1824486144",
            "url": "https://m.media-amazon.com/images/M/MV5BNmJmMTQ1MTgtMjA4Zi00NjllLTkyODgtZWYzYWZkODA1YTUwXkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_.jpg",
            "width": 1529
        },
        "title": "Apocalypse After",
        "titleType": "short",
        "year": 2018
    },
    {
        "id": "/title/tt3265262/",
        "image": {
            "height": 2222,
            "id": "/title/tt3265262/images/rm1302315008",
            "url": "https://m.media-amazon.com/images/M/MV5BMzgzNTQ0NjQyNV5BMl5BanBnXkFtZTgwMzE5NzczMjE@._V1_.jpg",
            "width": 1500
        },
        "title": "Pulp: A Film About Life, Death & Supermarkets",
        "titleType": "movie",
        "year": 2014
    },
    {
        "id": "/title/tt1737680/",
        "image": {
            "height": 2828,
            "id": "/title/tt1737680/images/rm3461590016",
            "url": "https://m.media-amazon.com/images/M/MV5BMTUwMTQ3NjIxOV5BMl5BanBnXkFtZTcwODA1NjI4OA@@._V1_.jpg",
            "width": 2000
        },
        "title": "Pulp",
        "titleType": "movie",
        "year": 2013
    },
    {
        "id": "/title/tt20101508/",
        "image": {
            "height": 720,
            "id": "/title/tt20101508/images/rm2749960961",
            "url": "https://m.media-amazon.com/images/M/MV5BNzgwZGVkMjQtNjM3ZS00Zjk0LWI3YWEtYjdjMjcyOGQwOTU3XkEyXkFqcGdeQXVyNTY1NjEyMjI@._V1_.jpg",
            "width": 720
        },
        "title": "Fever Dreams: A Pulp Collection",
        "titleType": "podcastSeries",
        "year": 2022
    },
    {
        "id": "/title/tt7441752/",
        "image": {
            "height": 1080,
            "id": "/title/tt7441752/images/rm1296595712",
            "url": "https://m.media-amazon.com/images/M/MV5BNDMwNzU0NjQtZTc5My00NWJhLTg4OTctYzg1YTdjOGYzMWQyXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
            "width": 1920
        },
        "title": "Pulp: Common People",
        "titleType": "musicVideo",
        "year": 1995
    },
    {
        "id": "/title/tt1320090/",
        "image": {
            "height": 2157,
            "id": "/title/tt1320090/images/rm1650030848",
            "url": "https://m.media-amazon.com/images/M/MV5BMmRhODVhY2QtMGZjYS00NTExLThiZDktNTdkMTVlZGI1N2VkXkEyXkFqcGdeQXVyMTg0MTI3Mg@@._V1_.jpg",
            "width": 1530
        },
        "title": "Beaten to a Pulp",
        "titleType": "movie",
        "year": 2008
    },
    {
        "id": "/title/tt0811032/",
        "image": {
            "height": 500,
            "id": "/title/tt0811032/images/rm984813568",
            "url": "https://m.media-amazon.com/images/M/MV5BNmJmZGNjY2UtMTcxZC00YzdkLWFhZWEtYWIxNTJiNWZhN2E2XkEyXkFqcGdeQXVyMjYxMzY2NDk@._V1_.jpg",
            "width": 407
        },
        "title": "Pulpe amère",
        "titleType": "short",
        "year": 1987
    }
]
const Search=()=>{
    const [text,setText]=useState("");
    const [data,setData]=useState([])
    useEffect(()=>{
        const search=async()=>{
           let data={
            query:text
           } 
           await axios.post('/api/search',data)
           .then((response)=>{
            console.log("From backend-->",response);
            if(response.data.error==false)
              if(response.data.query==text)
              {
                  console.log("old:",response.data.query)
                  console.log("new:",text)
                  setData(response.data.data)
              }
           })
        }
        if(text!="")
          search();
    },[text])
    return (
        <div className="flex flex-col justify-center items-center mt-40 ">
               <div className="border-2 border-black">
                  <input type="text" onChange={(e)=>{setText(e.target.value)}} className="px-2 sm:px-4 border-none outline-none text-[12px] w-300 sm:w-400 md:w-500" placeholder="Find movies,series,episodes..." />
                  <button className="text-[11px] bg-black text-white py-2 px-4">SEARCH</button>
               </div>
               {
                data.length>0&&
               <div className="border-2 rounded-md border-b-[#bfbdb8] border-l-[#bfbdb8] w-375 sm:w-475 md:w-575 text-left px-4">
                   <div>
                     {
                        data.map((single)=>single.title&&
                         <a className="flex my-1 hover:bg-blue-50 cursor-pointer" href={single.id}>
                            {
                           single.image&&
                            <img src={single.image.url?single.image.url:''} style={{width:'30px',height:'30px'}}/>
                            }
                            <div>{single.title}</div>
                            {
                                single.year&&
                                <div className=" text-[10px] mx-1 flex justify-center items-center px-1 py-1 " style={{float:'right'}}><span className="bg-blue-100 px-1 rounded-sm">{single.year}</span></div>
                            }
                            {
                                single.titleType&&
                                <div className=" text-[10px] mx-1 flex justify-center items-center px-1 py-1 " style={{float:'right'}}><span className="bg-blue-100 px-1 rounded-sm">{single.titleType}</span></div>
                            }
                         </a>
                        )
                     }
                   </div>
               </div>
               }
        </div>
    )
}
export default Search;