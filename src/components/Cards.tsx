interface CardProps {
    key: number,
    url: string,
    desc: string,
    title: string;
}
const Card: React.FC<CardProps> = ({ key, url, desc, title }) => {
    return (
        <div key={key} data-image="true" className="w-96 h-[485.13px] relative">
            <div className="w-72 h-96 absolute left-[18.27px] top-[19.94px] flex flex-col items-center gap-4">
                <img
                    className="w-72 h-72 rounded-xl"
                    src={url}
                    alt="Product"
                />
                <div className="w-72 text-center text-black text-2xl font-extrabold font-[Abhaya-Libre]">
                    {title}                </div>
                <div className="w-72 text-center text-black text-xs font-light font-sansation-light">
                    {desc}
                </div>
                <div className="w-28 z-20 h-7 px-4 py-2.5 bg-black flex justify-center items-center cursor-pointer">
                    <span className="text-white text-[10px] font-normal font-sansation leading-3 tracking-wide">
                        READ MORE
                    </span>
                </div>
            </div>
            <div className="w-80 h-[485.13px] absolute left-0 top-0 rounded-xl border border-fuchsia-300 border-dashed" />
        </div>
    );
};

export default Card;
