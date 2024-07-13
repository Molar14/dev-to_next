import Aside from "./components/Aside";
import AsideRight from "./components/AsideRight";
import Content from "./components/Content";
import Navbar from "./components/NavBar";
import { getPost } from "@/lib/api";
import { toast } from "sonner";

//components
export default function Home () {
    return (
        <main className="w-full min-h-screen bg-white grid grid-cols-[20%_3fr_20%] grid-rows-[4rem_3fr] text-black gap-5  ">
            
            <header className="col-span-3 pt-1"> 
                <Navbar />
            </header>
            
            
            <aside className="row-span-2 pl-20">
                <Aside/>
            </aside>

            <section className=" p-4">
                <Content />
            </section>

            <aside className="row-span-2 pr-20">
                <AsideRight/>
            </aside>
          
        </main>
    )   
}

export async function getServerSideProps() {
    try {
      const post = await getPost ();
  
      return {
        props: {
          post ,
        },
      };
    } catch (error) {
      toast.error(error);
      console.error(error);
  
      return {
        props: {
          post: [],
        },
      };
    }
  }