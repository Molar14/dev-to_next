import { useEffect, useState } from "react"
import { getUser, getPostById } from "@/lib/api"
import { useRouter } from "next/router"
import { format } from "date-fns"

export default function AsideR () {
    const router = useRouter()
    const [ post, setPost ] = useState({})
    const [ user, setUser ] = useState ({})
    const { id } = router.query 
    const formatDate = format(Date(user.created_at), "dd-MM-yyyy")
  
  
  
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
        <aside className="flex flex-col ml-4 max-sm:bg-gray-500/20 max-lg:hidden ">

            <article className="flex flex-col bg-white w-96 rounded-md border-gray-500/30 border-[.5px ] ">
            
             <span>
                <img className="rounded-t-md w-full h-6" src="https://www.publicdomainpictures.net/pictures/110000/nahled/solid-red-background-14148727243CA.jpg" alt="" />
             </span>

            <div className="flex">
            <img className="size-14 rounded-full m-2" src={user.profilePic} alt="" />
               <p className="m-4 font-bold text-2xl">{user.name}</p>
            </div>
            <button className=" bg-[#4e57ef] text-white font-semibold ml-8 w-80 h-10 rounded-md hover:bg-indigo-700">Follow</button>
            
            <div>
                <p className="text-black/70 m-3">esProc Desktop is a desktop data processing & analytics tool and is specifically designed for ordinary business people, which significantly lowers the technical threshold for data analytics.</p>
            </div>

            <p className="text-sm ml-3 font-semibold text-black/70">JOINED</p>
            <p className="text-sm ml-3 font-semibold text-black/70" >{formatDate}</p>

            </article>

        </aside>
    )
}