import { useState, useEffect } from "react"; 
import { getPost, getPostById } from "@/lib/api";

import { useRouter } from "next/router";
import Link from "next/link";


    export default function Content ({}) {
      const [posts, setPosts] = useState([]);
      const router = useRouter();

      useEffect(() => {
          getPost ()
          .then((content) => {
            setPosts(content)
          })
          }
  
      ,[]);



        return (
            <main className="flex flex-col justify-center items-center ">
                <div className=" bg-white mb-3 rounded-md w-8/12 max-sm:w-[170%] md:w-[120%] md:ml-[50%] lg:w-[83%] lg:ml-[14%] xl:ml-[-8%]">
                    <img className="flex flex-col justify-center w-full rounded-t-md pb-2"src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F445qmtczsqgd4536xqg3.png" alt="image" />
                    
                    <span className="flex ">
                        <img className="w-9 rounded-[50%] p-1" src="https://api.dicebear.com/9.x/avataaars-neutral/svg" alt="user"/>
                        <p className="p-1 text-sm">Anmol Baranwal</p>
                    </span>

                    <h1 className="font-bold text-4xl pl-12">
                    15 amazing things you can do with simple JavaScript
                    </h1>
                    <p className="text-m pl-12 pt-2 opacity-80 mb-4">#Javascript   #beginners   #programming   #webdv</p>
                </div>
                <header>
                
            </header>
            
            <div className="
                flex
                flex-col-reverse
                gap-2 w-8/12">
              {
                posts.map((post,idx) => {
                  return(
                    <div key={`key${idx}`} className="w-full flex flex-col bg-white rounded-md pb-8 max-sm:w-[255%] max-sm:ml-[-114px] md:w-[180%] ml-[-2%] lg:w-[125%] xl:ml-[-18.5%]">
                    <img className="flex flex-col justify-center w-full rounded-t-md pb-2" src={post.image} alt={post.tittle} />
                        
                        <span className=" w-8/12 p-2 flex mb-2"> 
                         <img className="size-10 rounded-full" src={post.user.profilePic} alt={post.user.user} />
                        <h1 className="font-semibold ml-2">
                             {post.user.name}
                        </h1>

                        
                        </span>
                        <span className="text-s text-[#ACACAC] ml-14 mt-[-30px] flex flex-col">
                             Jul 8
                         </span>
                        
                         <Link className="font-bold text-4xl pl-12 cursor-pointer" href={`/Detail/${post._id}`}>
                             <h1 >{post.tittle}</h1>
                         </Link>
                         <p className="text-m pl-12 mt-2 opacity-80 mb-4">#Javascript   #beginners   #programming   #webdv</p>
                     </div>
                     )
                    })
                }
                    
                  
                  
            </div>
                
                
            </main>
            
      
        )
    }