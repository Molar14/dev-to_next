export default function AsideL () {
    return (
      <aside className="flex flex-col items-center w-20 mt-10 gap-8 max-sm:hidden">
      
      <div className="flex flex-col items-center justify-center gap-2 ">
        <svg className="w-12" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.8456 6.42726L12 6.59097L12.1544 6.42726C14.132 4.33053 17.4026 4.57697 19.0807 6.94915C20.57 9.05459 20.2133 12.0335 18.275 13.6776L12 19L5.725 13.6776C3.78668 12.0335 3.42999 9.05459 4.91934 6.94915C6.59738 4.57698 9.86801 4.33053 11.8456 6.42726Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        <span className="text-sm">30</span>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-2">
      <svg className="w-9 opacity-70"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.99951 16.55V19.9C4.99922 20.3102 5.11905 20.7114 5.34418 21.0542C5.56931 21.397 5.88994 21.6665 6.26642 21.8292C6.6429 21.9919 7.05875 22.0408 7.46271 21.9698C7.86666 21.8989 8.24103 21.7113 8.53955 21.4301L11.1495 18.9701H12.0195C17.5395 18.9701 22.0195 15.1701 22.0195 10.4701C22.0195 5.77009 17.5395 1.97009 12.0195 1.97009C6.49953 1.97009 2.01953 5.78009 2.01953 10.4701C2.042 11.6389 2.32261 12.7882 2.84125 13.8358C3.35989 14.8835 4.10373 15.8035 5.01953 16.53L4.99951 16.55Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      <span className="text-sm">50</span>
      </div>

      <div className="flex flex-col items-center justify-center after:gap-2"> 
      <svg className="w-14" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      <span className="text-sm">5</span>
      </div>

      </aside>
       
    )
}