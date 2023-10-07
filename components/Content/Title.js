import axios from "axios"
import { useEffect, useState } from "react"
let moviedemo={
    id: '/title/tt1375666/',
    title: {
      '@type': 'imdb.api.title.title',
      id: '/title/tt1375666/',
      image: {
        height: 1037,
        id: '/title/tt1375666/images/rm3426651392',
        url: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
        width: 700
      },
      runningTimeInMinutes: 148,
      title: 'Inception',
      titleType: 'movie',
      year: 2010
    },
    certificates: { US: [ [Object] ] },
    ratings: { canRate: true, rating: 8.8, ratingCount: 2473855, topRank: 14 },
    genres: [ 'Action', 'Adventure', 'Sci-Fi', 'Thriller' ],
    releaseDate: '2010-07-16',
    plotOutline: {
      id: '/title/tt1375666/plot/po2032202',
      text: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.'
    },
    plotSummary: {
      author: 'Warner Bros. Pictures',
      id: '/title/tt1375666/plot/ps0481854',
      text: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming."
    }
  }
let seriesdemo={
    id: '/title/tt7767422/',
    title: {
      '@type': 'imdb.api.title.title',
      id: '/title/tt7767422/',
      image: {
        height: 755,
        id: '/title/tt7767422/images/rm1516068609',
        url: 'https://m.media-amazon.com/images/M/MV5BNjJkYTI1MjAtNTcxZC00YmU5LWExMDAtZTg3YzRhMDNmYmEwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
        width: 604
      },
      runningTimeInMinutes: 45,
      nextEpisode: '/title/tt8431282/',
      numberOfEpisodes: 32,
      seriesEndYear: 2023,
      seriesStartYear: 2019,
      title: 'Sex Education',
      titleType: 'tvSeries',
      year: 2019
    },
    certificates: { US: [ [Object] ] },
    ratings: {
      canRate: true,
      rating: 8.3,
      ratingCount: 324264,
      otherRanks: [ [Object] ]
    },
    genres: [ 'Comedy', 'Drama' ],
    releaseDate: '2019-01-11',
    plotOutline: {
      id: '/title/tt7767422/plot/po3671428',
      text: 'A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school.'
    },
    plotSummary: {
      author: 'krmanirethnam',
      id: '/title/tt7767422/plot/ps5125059',
      text: `"Socially awkward high school student Otis may not have much experience in the lovemaking department, but he gets good guidance on the topic in his personal sex ed course -- living with mom Jean, who is a sex therapist. Being surrounded by manuals, videos and tediously open conversations about sex, Otis has become a reluctant expert on the subject. When his classmates learn about his home life, Otis decides to use his insider knowledge to improve his status at school, so he teams with whip-smart bad girl Maeve to set up an underground sex therapy clinic to deal with their classmates' problems. But through his analysis of teenage sexuality, Otis realizes that he may need some therapy of his own.`
    }
  }
const Title=({titleId})=>{
    const [data,setData]=useState();
    const [loader,setLoader]=useState(true)
    // useEffect(()=>{
        const getTitleData=async()=>{
            let data={
             titleId:titleId
            }
               await axios.post('/api/overview',data)
                 .then((response)=>{
                     console.log("From backend-->",response.data);
                    if(response.data.error==false) 
                    {
                        setData(response.data.data);
                        setLoader(false)
                    }
                  
                 })
    }
    if(titleId!=undefined&&loader)
      getTitleData();
    // },[])
    
    return (
        <div className="flex flex-col">
                 <div>
                 <iframe  className="w-full" style={{height:'80vh'}} src={`https://www.2embed.cc/embed/${titleId}`}></iframe>
                 </div>
                 <div>
                     {
                        loader?
                        <div className="flex justify-center items-center mt-4">
                                   Loading title details...
                        </div>:
                            <div className="flex flex-col  justify-center items-center mt-5">
                                   <div className="flex flex-col sm:flex-row ">
                                       <div className="flex-1">
                                          <img className="w-370" src={data.title.image?data.title.image.url:''}/>
                                       </div>
                                       <div className="flex-[2] flex space-y-1 flex-col mx-2">
                                            <div>
                                                <span className="bg-black rounded-md px-5 py-1 text-white text-[13px]">{data.title.title.toUpperCase()}</span>
                                            </div>
                                            <div>
                                                {
                                                    data.releaseDate&&
                                                    <span className="text-[10px] bg-blue-100 rounded-sm px-2 py-1">{data.releaseDate}</span>
                                                }
                                            </div>    
                                            <div>
                                                {
                                                    data.genres.map((s)=><span className=" cursor-pointer bg-white hover:bg-black text-black hover:text-white border-2 border-black mx-1 text-[11px] rounded-md px-1 ">{s}</span>)
                                                }
                                            </div>
                                            <div>
                                                <span className="bg-yellow-500 text-black px-3 py-1 rounded-md">
                                                     {data.ratings.rating}
                                                </span>
                                                <span className="mx-1 text-[10px]">
                                                      {data.ratings.ratingCount} <span className="text-[17px]">&#9787;</span>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[10px]">
                                                    {
                                                      data.plotSummary?data.plotSummary.text:data.plotOutline?data.plotOutline.text:'No Description provided.'  
                                                    }
                                                </span>
                                            </div>    
                                       </div>
                                    </div>
                            </div>
                     }
                 </div>
        </div>
    )
}
export default Title;