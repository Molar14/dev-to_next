import { getPostById, getUser} from "@/lib/api"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Navbar from "../components/NavBar"
import AsideL from "./AsideL"
import AsideR from "./AsideR"
import { format } from "date-fns"
export default function PostDetail () {
  const router = useRouter()
  const [ post, setPost ] = useState({})
  const [ user, setUser ] = useState ({})
  const { id } = router.query 
  const formatDate = format( Date(post.created_at), "dd-MM-yyyy")



  useEffect (() => {
    if (id) {
      getPostById(id)
      .then ( data => {
        setPost(data)
      }) .catch (error => {
        console.error("No se encontro el post", error)
      })
    } 
  }, [id]) 
  
  useEffect (() => {
    if (post.user) {
      getUser(post.user)
      .then ( data => {
        setUser(data)
      })
    } 
  }, [post.user]) 

  return (
    
    <main className=" bg-gray-500/20 flex flex-col min-h-screen w-full" >
      
      <nav>
         <Navbar/>
      </nav>
       
        
    <section className="flex justify-center mt-4 ">
       <AsideL/>  
      <div className="rounded-md bg-white w-2/4 min-h-screen max-sm:w-[90%] max-sm:ml-[0%] md:w-[80%] xl:w-[50%]">
      <span >
        <img className= "w-full rounded-t-md" src={post.image} alt="Post Image" />
      </span>
      
      <span className="flex ">
      <img className="size-10 rounded-full m-2" src={user.profilePic} alt="" />
        <h1 className="font-bold mt-2 text-lg">{user.name}</h1>
      </span>
      <span className="text-xs text-[#ACACAC] ml-14 mt-[-20px] flex">
        <p className="created_at ">Posted on {formatDate}</p>
      </span>

      <span className="flex ml-10 mt-5 text-xl "> 
        <p className="pr-3">🦄 3</p>
        <p className="pr-3">❤️ 5</p>
        <p className="pr-3">🤔 1</p>
        <p className="pr-3">👌 2</p>

      </span>
     
      <span> 
        <h1 className="font-extrabold text-6xl m-10 ">{post.tittle}</h1>
      </span>

      <span className="flex ml-10 mt-[-20px] text-slate-600 max-sm:ml-[4%]">
        <p className="cursor-pointer border-transparent border-2 pr-2 rounded-md hover:bg-red-300/50 hover:border-red-300 max-sm:text-[80%]">#JavaScript</p>
        <p className="cursor-pointer border-transparent border-2 pr-2 rounded-md hover:bg-blue-300/50 hover:border-blue-300 max-sm:text-[80%]">#Programming</p> 
        <p className="cursor-pointer border-transparent border-2 pr-2 rounded-md hover:bg-green-300/50 hover:border-green-300 max-sm:text-[80%]">#Beginner</p>
        <p className="cursor-pointer border-transparent border-2 pr-2 rounded-md hover:bg-yellow-300/50 hover:border-yellow-300 max-sm:text-[80%]">#DeveloperWeb</p>
        <p className="cursor-pointer border-transparent border-2 pr-2 rounded-md hover:bg-orange-300/50 hover:border-orange-300 max-sm:hidden">#Productivity</p>
      </span>
      
      <span>
        <p className="font-semibold text-2xl m-10">{post.body}</p>
      </span>
      
    </div>

    <AsideR/>

    </section>
    

    </main>
    
    
    
  )
}