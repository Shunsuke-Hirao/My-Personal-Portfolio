const MENU_ITEMS = [
"About Me",
"Education",
"Full Time Job Experience",
"Projects",
];

export default function SideMenu(){
    return(
        <section className="flex min-h-screen items-center justify-center bg-gray-50">
     <ul className="m-0 list-none p-0">
       {MENU_ITEMS.map((item, index) => (
         <li
           key={item}
           className={`
             w-[200px] border border-[#993333] p-[5px] text-center
             ${index !== 0 ? "border-t-0" : ""} 
             hover:bg-[#993333] hover:text-white transition-colors cursor-pointer
           `}
         >
           {item}
         </li>
       ))}
     </ul>
   </section>
    );
}