export default function AsideRight () {
    return (
        <aside className="flex flex-col justify-end m-2 pr-3 hidden lg:flex ">
           <div className="bg-white h-14 rounded-t-md lg:h-20 xl:h-12">
            <p className="font-bold text-xl pl-3 pt-3">Active discussions</p>
           </div>

           <div className="bg-white h-24 mt-[1px] lg:h-40 xl:h-28">
            <p className=" text-l pl-2 pt-2 cursor-pointer hover:text-[#4e57ef]">How I created reusable React Icon Component using react-icons library in an AstroJs Project.</p>
            <p className="pl-2 pt-1 text-sm opacity-80">3 comments</p>
           </div>
           <div className="bg-white h-24 mt-[1px] xl:h-16">
            <p className=" text-l pl-2 pt-2 cursor-pointer hover:text-[#4e57ef]">My first Saas - flippcard.com</p>
            <p className="pl-2 pt-1 text-sm opacity-80">10 comments</p>
           </div>
           <div className="bg-white h-24 mt-[1px] lg:h-32 xl:h-24">
            <p className=" text-l pl-2 pt-2 cursor-pointer hover:text-[#4e57ef]">7 Open Source Projects You Should Know - C# Edition ✔️</p>
            <p className="pl-2 pt-1 text-sm opacity-80">5 comments</p>
           </div>
           <div className="bg-white h-24 mt-[1px] lg:h-36 xl:h-24">
            <p className=" text-l pl-2 pt-2 cursor-pointer hover:text-[#4e57ef]"> 7 Proven Tactics to Grow a Thriving Developer Community Discover</p>
            <p className="pl-2 pt-1 text-sm opacity-80">5 comments</p>
           </div>
           <div className="bg-white h-24 mt-[1px] lg:h-36 xl:h-24">
            <p className=" text-l pl-2 pt-2 cursor-pointer hover:text-[#4e57ef]">Do you have enough knowledge about object References in JS ? 🤯</p>
            <p className="pl-2 pt-1 text-sm opacity-80">3 comments</p>
           </div>
           <div className="bg-white h-24 mt-[1px] lg:h-32 xl:h-24">
            <p className=" text-l pl-2 pt-2 cursor-pointer hover:text-[#4e57ef]">Mythbusting DOM: Was DOM Invented Alongside HTML?</p>
            <p className="pl-2 pt-1 text-sm opacity-80">13 comments</p>
           </div>
           <div className="bg-white h-24 mt-[1px] lg:h-40 xl:h-[110px]">
            <p className=" text-l pl-2 pt-2 cursor-pointer hover:text-[#4e57ef]">Measuring Community Health: The Metrics That Actually Matter for Startup DevTools</p>
            <p className="pl-2 pt-1 text-sm opacity-80">3 comments</p>
           </div>
        </aside>
        
    )
}