export default function Face(){
    return(
        <section className="relative max-w-6xl mx-auto w-full mb-10 h-screen overflow-hidden">
            
            <div className="flex relative ml-40 mr-20 mx-auto my-10 ">
                <img 
                    src="/facePage/face.png" 
                    alt="faceimg"
                    className="w-[480px] h-[570px] object-cover" 
                />

                <img 
                    src="/facePage/paintSide.png" 
                    alt="paintimg"
                    className="w-[650px] h-[600px] object-contain absolute -top-65 -right-20" 
                />
            </div>

            <div className="text-9xl font-bold italic text-left absolute bottom-15 right-30 z-20"
            style={{ animation: "slideInFromFarRight 0.5s ease 0.5s both" }}>
                <h2>Shunsuke</h2>
                <h2>Hirao</h2>
            </div>

            <div className="fixed top-0 right-0 w-[75px] h-[70px] z-[50] cursor-pointer bg-[#333333] opacity-90">
                <span className="absolute top-[22px] left-[23px] w-8 h-[2px] bg-white"></span>
                <span className="absolute top-[35px] left-[23px] w-8 h-[2px] bg-white"></span>
                <span className="absolute bottom-[20px] left-[23px] w-8 h-[2px] bg-white"></span>
            </div>

            <div 
                className="fixed bottom-22 right-0 pl-4 w-[95px] h-[70px] z-[50] flex items-center justify-center cursor-pointer bg-slate-50 border border-black/30 border-r-0 hover:bg-[#00FF00] transition-colors duration-300"
                style={{ animation: "slideInRight 0.5s ease-out 3s both" }}
            >
                <a href="https://github.com/Shunsuke-Hirao" target="_blank" rel="noopener noreferrer">
                    <img src="/icon/github.png" alt="githubicon" className="w-8 h-8 rounded-full" />
                </a>
            </div>

        </section>
    );
}