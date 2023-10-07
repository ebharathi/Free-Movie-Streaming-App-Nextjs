import axios from "axios";
export default async function search(req,res)
{
    console.log("search request api called[+] ",req.body.query);
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/v2/find',
        params: {title: req.body.query,limit:10},
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
      };

    try {
        const response = await axios.request(options);
        // console.log(response.data);
        console.log("Response came for search api--> ",req.body.query)
        if(response.data)
        {
            if(response.data.results)
            {
               res.json({
                error:false,
                query:req.body.query,
                data:response.data.results
               })
            }
            else
            {
                res.json(
                    {
                        error:true,
                        message:"No result found"
                    }
                )
            }
        }

    } catch (error) {
        console.error(error);
        res.json(
            {
                error:true,
                message:"No result found"
            }
        )
    }      
}