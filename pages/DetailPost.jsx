import { useParams } from "react-router-dom"
import Navbar from "./components/NavBar"
import { useEffect, useState } from "react"
import { getPostById } from "@/lib/api"
import { toast } from "sonner"
export default function DetailPost ({ tittle, body, image, created_at }) {

    


    return (

        <main className="w-full grid-col-start-1 grid-col-end-2 sm:grid-col-start-2 sm:grid-col-end-3 overflow-hidden rounded-md">
            <Navbar/>
            <header>
                <img src= { image } alt="Image post"/>
            </header>
            <h1>{tittle}</h1>

        


        </main>
    )
}