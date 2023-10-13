import axios from "axios";
export default async function getPopularMovies(req,res)
{
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
        params: {
            homeCountry: 'US',
            purchaseCountry: 'US',
            currentCountry: 'US'
        },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
      };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        console.log("Response came for popular movies api");
        if(response.data)
        {
            if(response.data)
            {
               res.json({
                error:false,
                data:response.data
               })
            }
            else
            {
                res.json(
                    {
                        error:true,
                        message:"No Popular movies found"
                    }
                )
            }
        }

    } catch (error) {
        console.error(error);
        res.json(
            {
                error:true,
                message:"No overview found"
            }
        )
    }      
}