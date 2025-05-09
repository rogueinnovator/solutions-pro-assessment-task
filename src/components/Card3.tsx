
const Card3 = () => {
    return (
        <div data-image="true" className="relative inline-flex flex-col justify-start items-start gap-2.5">
            <div className="w-[731.02px] h-96 rounded-xl border border-fuchsia-300 border-dashed" />

            <div className="left-[18.60px] top-[18.28px] absolute inline-flex justify-start items-center gap-6">
                <img className="w-96 h-80 rounded-xl object-cover" src="/images/product7.jpg" alt="Card Image" />

                <div className="inline-flex flex-col justify-start items-start gap-4">
                    <div className="w-64 text-black text-2xl font-extrabold font-['Abhaya_Libre_ExtraBold']">
                        DOES PERFUME REALLY DESTROY YOUR SKIN?
                    </div>
                    <div className="w-56 text-black text-xs font-light font-roboto">
                        Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at. Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...
                    </div>
                    <div
                        data-state="default"
                        className="w-28 h-7 px-4 py-2.5 bg-black inline-flex justify-center items-center gap-4"
                    >
                        <button className="text-center text-white text-[10px] font-normal font-roboto leading-3 tracking-wide cursor-pointer">
                            READ MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card3;
