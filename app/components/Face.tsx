export default function Face(){
    return(
        <section className="relative max-w-6xl mx-auto w-full mb-10 h-screen">
            
            {/* --- 画像エリア*/}
            <div className="flex relative ml-40 mr-20 mx-auto my-10 ">
                {/* facephoto (ベースの画像) */}
                <img src="/facePage/face.png" alt="faceimg"
                className="w-[480px] h-[570px] object-cover" />

                {/* paintImg (上に重ねる画像) */}
                <img src="/facePage/paintSide.png" alt="paintimg"
                className=" w-[650px] h-[600px] object-contain absolute -top-65 -right-20" />
            </div>

            {/* name */}
            {/* テキストも画像の上に被せたい場合は、z-20などを追加して順序を調整します */}
            <div className="text-9xl font-bold italic text-left absolute bottom-20 right-30 z-20">
                <h2>Shunsuke</h2>
                <h2>Hirao</h2>
            </div>

            {/* --- sidemenu --- */}
            <div className="fixed top-0 right-0 w-[75px] h-[70px] z-[50] cursor-pointer bg-[#333333] opacity-90">
                <span className="absolute top-[22px] left-[23px] w-8 h-[2px] bg-white"></span>
                <span className="absolute top-[35px] left-[23px] w-8 h-[2px] bg-white"></span>
                <span className="absolute bottom-[20px] left-[23px] w-8 h-[2px] bg-white"></span>
            </div>
        </section>
    );
}