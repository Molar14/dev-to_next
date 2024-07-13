import { createPost } from "@/lib/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function CreatePost() {
    const router = useRouter();
    const { handleSubmit, register,  formState: { errors } } = useForm();

    async function onSubmit(data) { 
        console.log(data); // Añadido para verificar los datos
        try {
            await createPost(data.tittle, data.body, data.user, data.image);
            toast.success("Post registrado");
            router.push('/');
        } catch (error) {
            toast.error("Error");
        }
    }
        
         
            
            
       

    return (
        <main className="flex flex-col w-full min-h-screen bg-white text-black ">
            <div className="flex mb-[-50px] max-sm:w-[150%] max-sm:ml-[-70%] md:ml-[-20%] 2xl:ml-[-15%]">
                <svg className="w-14 ml-80 " fill="#000000" viewBox="0 0 24 24" role="img">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <title>dev.to icon</title>
                        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"></path>
                    </g>
                </svg>
                <p className="p-3 font-semibold text-lg">Create Post</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        className="flex justify-around relative mt-14 ml-80 p-6 border-transparent rounded-md bg-white h-10 w-80 placeholder-gray-500 placeholder:font-bold focus:outline-none max-sm:ml-[5%] md:ml-[21%] "
                        placeholder="Put your Image link"
                        type="text"
                        {... register('image')}
                    />
                
                    <input
                        className="flex justify-around relative mt-8 ml-80 p-20 border-transparent rounded-md bg-white w-6/12 text-5xl placeholder-gray-500 placeholder:font-bold focus:outline-none max-sm:ml-[5%] max-sm:w-[90%] max-sm:text-lg md:ml-[21%] md:w-[70%] md:text-2xl"
                        placeholder="New post title here..."
                        type="text"
                        {...register("tittle", {
                            required: {
                                value: true,
                            },
                        })}
                    />
                </div>
                <div className="h-48">
                    <textarea
                        className="flex justify-around relative mt-3 ml-80 p-20 border-transparent rounded-md bg-white w-6/12 h-96 text-2x1 placeholder-gray-500 placeholder:font-mono focus:outline-none max-sm:ml-[5%] max-sm:w-[90%] max-sm:text-lg md:ml-[21%] md:w-[70%] "
                        placeholder="Write your post content here ..."
                        type="text"
                        {...register('body', {
                            required: {
                                value: true,
                                message: "El Contenido es requerido",
                            },
                        })}
                    />
                    <button className="ml-80 mt-3 bg-[#4e57ef] text-white h-10 w-20 rounded-md md:ml-[21%]" type="submit">Publish</button>
                </div>
            </form>
        </main>
    );
}