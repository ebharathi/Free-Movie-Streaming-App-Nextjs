import axios from "axios";
export default async function overview(req,res)
{
    console.log("seasons request api called[+] ",req.body.titleId);
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-seasons',
        params: {
          tconst: req.body.titleId
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
      };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        console.log("Response came for season api--> ",req.body.titleId)
        if(response.data)
        {
            if(response.data)
            {
               res.json({
                error:false,
                query:req.body.titleId,
                data:response.data
               })
            }
            else
            {
                res.json(
                    {
                        error:true,
                        message:"No season found"
                    }
                )
            }
        }

    } catch (error) {
        console.error(error);
        res.json(
            {
                error:true,
                message:"No seasons found"
            }
        )
    }      
}