export default function Face(){
    return(
        <div className="w-full overflow-x-hidden">
            
            <section className="relative max-w-6xl mx-auto w-full mb-10 h-screen overflow-hidden">
                
                <img 
                    src="/facePage/paintSide.png" 
                    alt="paintimg"
                    className="w-[650px] h-[600px] object-contain absolute -top-60 right-0 z-20 pointer-events-none" 
                />

                <div className="relative w-[480px] h-[570px] ml-40 my-10">
                    
                    <img 
                        src="/facePage/face.png" 
                        alt="faceimg"
                        className="w-[480px] h-[570px] object-cover absolute top-0 left-0 z-10" 
                    />

                    <div 
                        className="text-9xl font-bold italic text-left absolute bottom-10 -right-100 z-30 text-black w-max"
                        style={{ animation: "slideInFromFarRight 0.5s ease 1.5s both" }}
                    >
                        <h2>Shunsuke</h2>
                        <h2>Hirao</h2>
                    </div>

                    <div className="absolute top-0 w-[480px] h-[570px] overflow-hidden z-40 pointer-events-none">
                        <div 
                            className="text-9xl font-bold italic text-left absolute bottom-10 -right-100 text-white w-max"
                            style={{ animation: "slideInFromFarRight 0.5s ease 1.5s both" }}
                        >
                            <h2>Shunsuke</h2>
                            <h2>Hirao</h2>
                        </div>
                    </div>

                </div>

                {/* <div className="fixed top-0 right-0 w-[75px] h-[70px] z-[50] cursor-pointer bg-[#333333] opacity-90">
                    <span className="absolute top-[22px] left-[23px] w-8 h-[2px] bg-white"></span>
                    <span className="absolute top-[35px] left-[23px] w-8 h-[2px] bg-white"></span>
                    <span className="absolute bottom-[20px] left-[23px] w-8 h-[2px] bg-white"></span>
                </div> */}

                <a 
                    href="https://github.com/Shunsuke-Hirao" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="fixed bottom-22 right-0 pl-4 w-[95px] h-[70px] z-[50] flex items-center justify-center cursor-pointer bg-slate-50 border border-black/30 border-r-0 hover:bg-[#00FF00] transition-colors duration-300"
                    style={{ animation: "slideInRight 0.5s ease-out 3s both" }}
                >
                    <img src="/icon/github.png" alt="githubicon" className="w-8 h-8 rounded-full" />
                </a>

            </section>
        </div>
    );
}