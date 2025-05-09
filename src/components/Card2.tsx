import React from 'react';

interface Card2Props {
    imageUrl: string;
}

const Card2: React.FC<Card2Props> = ({ imageUrl }) => {
    return (
        <div
            data-image="true"
            className="relative inline-flex flex-col justify-start items-start gap-2.5"
        >
            <img className="w-72 h-[310px] object-cover" src={imageUrl} loading='lazy' alt="Card image" />
            <div className="w-60 h-44 absolute left-[34.21px] top-[50.26px] bg-white/90" />
            <div className="w-52 absolute left-[50.40px] top-[96.67px] flex flex-col justify-start items-center gap-3.5">
                <div className="w-48 flex flex-col justify-start items-center gap-[3px]">
                    <div className="text-black text-[8px] font-light font-roboto leading-3 tracking-[3.20px]">
                        COSMETICS
                    </div>
                    <div className="text-black text-2xl font-light font-roboto leading-7 text-center">
                        LOREM ISPUM
                    </div>
                </div>

                <div className="w-28 h-7 px-4 py-2.5 bg-black inline-flex justify-center items-center gap-4">
                    <button className="text-white text-[10px] font-normal font-roboto leading-3 tracking-wide text-center cursor-pointer">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card2;
