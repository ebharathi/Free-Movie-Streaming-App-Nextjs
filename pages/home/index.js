import Nav from "@/components/Nav";
import Trending from "@/components/Home/Trending";
import Movies from "@/components/Home/Movies";
const HomePage=()=>{
    return(
        <div>
            <Nav/>
            <div className="mt-5">
                <span className="mx-2 px-2 py-1 rounded-sm text-white bg-blue-300 cursor-pointer hover:bg-blue-500">Trending</span>
                <span className="mx-2 px-2 py-1 rounded-sm text-white bg-blue-300 cursor-pointer hover:bg-blue-500">Movies</span>
                <span className="mx-2 px-2 py-1 rounded-sm text-white bg-blue-300 cursor-pointer hover:bg-blue-500">TV Shows</span>
            </div>
            <Movies/>
        </div>
    )
}
export default HomePage;