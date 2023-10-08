import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Input
} from "@material-tailwind/react";
import { useState,useEffect } from "react";
 
  
const Nav=()=>{
  const [openNav, setOpenNav] =useState(false);
  const [path,setPath]=useState("");
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
      // Rest of your code that uses 'path'
    }
  },[])
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  //for searching
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
                //   console.log("old:",response.data.query)
                //   console.log("new:",text)
                  setData(response.data.data)
              }
           })
        }
        if(text!="")
          search();
    },[text])
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      {
        path!="/"&&
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
                    <div className="relative flex w-full gap-2 md:w-max">
              <Input
                type="search"
                label="Type here..."
                className="pr-20"
                containerProps={{
                  className: "min-w-[288px]",
                }}
                onChange={(e)=>setText(e.target.value)}
              />
              <Button size="sm" className="!absolute right-1 top-1 rounded">
                Search
              </Button>
            </div>

          </Typography>
      }
    </ul>
  );

    return (
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-1 px-4 lg:px-8">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Movies Website by EB
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
    )
}
export default Nav;