const MENU_ITEMS = [
  "About Me",
  "Education",
  "Full Time Job Experience",
  "Projects",
];

export default function SideMenu(){
    return(
        <section className="flex h-screen items-center justify-center bg-[#333333] opacity-90 z-[60]">
          <ul className="m-0 list-none p-0">
            {MENU_ITEMS.map((item, index) => (
              <li
                key={item}
                className="my-14 w-[500px] p-[15px] text-center cursor-pointer transition-colors duration-300
                           border border-gray-500 text-gray-300
                           hover:border-white hover:text-black hover:bg-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
    );
}