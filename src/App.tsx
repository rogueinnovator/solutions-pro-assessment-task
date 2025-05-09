import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card from './components/Cards';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      {/* UPPER-TEXT----------------------------------------------------------- */}

      <div className="w-full h-10 p-2.5 bg-fuchsia-200 inline-flex justify-center items-center gap-2.5">
        <div className="text-black text-[10px] font-light font-['Montserrat'] leading-3 tracking-wide">
          Whooo! dreams come true!!
        </div>
      </div>
      {/* --------------------------------------------------------------------- */}



      {/* NAVBAR ----------------------------------------------------------------*/}

      <Navbar />

      {/* MAIN IMAGE -----------------------------------------------------------*/}

      <div id='home' className="relative w-full">
        <img
          src="/images/main.jpg"
          alt="main"
          className="w-full h-96 object-cover"
          loading="lazy"
        />
        <div className='w-[498px] h-52 top-[89px] absolute bg-white/90 left-1/2 transform -translate-x-1/2'>
          <div className='flex justify-center flex-col items-center pt-[42px]'>
            <div className="justify-start text-black text-[8px] font-light  leading-3 tracking-[3.20px]">COSMETICS</div>
            <div className="w-80 text-center  text-black text-2xl font-light  leading-7">BEST MAKE-UP PRODUCTS 2023</div>
            <div className="w-28 h-7 px-4 py-2.5 bg-black inline-flex justify-center items-center gap-4 mt-[15px]">
              <button className="text-center justify-start text-white text-[10px] font-light  leading-3 tracking-wide cursor-pointer ">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}



      {/* POSTS --------------------------------------------------------------- */}

      <div id='blogs' className="w-full mt-[66px] text-center justify-center text-black text-3xl font-bold font-['Sansation'] leading-10">POPULAR  POSTS</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mx-auto justify-items-center ml-16">
        {[
          { url: '/images/product1.jpg', desc: 'Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...', title: 'HOME-MADE SCRUBS - ORGANIC' },
          { url: '/images/product2.jpg', desc: 'Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...', title: 'HOME-MADE SCRUBS - ORGANIC' },
          { url: '/images/product3.jpg', desc: 'Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...', title: 'fasfaffas fasfaffas fasfaffas fasfaffas' },
        ].map((item, index) => (
          <Card key={index} url={item.url} desc={item.desc} title={item.title} />
        ))}
      </div>
      {/* ---------------------------------------------------------------------- */}



      {/* PRODUCTS_IMAGES -------------------------------------------------------*/}

      <div id='products' className='flex flex-col md:flex-row justify-center pt-[85px]'>
        {["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"].map((url, index) => <img key={index} loading='lazy' className="w-full h-96 border border-white object-cover" src={url} />)}
      </div>
      {/* ---------------------------------------------------------------------- */}


      {/* LATEST */}
      <div id='latest' className="w-full mt-[65px] text-center justify-start text-black text-3xl font-bold font-['Sansation'] leading-10">LATEST</div>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col md:flex-row justify-between items-center pt-[69px] px-[80px] md:gap-0 gap-80'>
          <div className='flex flex-col gap-[69px] '>
            <div className='flex flex-col items-center md:flex-row gap-6 ml-16 md:ml-0'>{[{ url: '/images/product1.jpg', desc: 'Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...', title: 'HOME-MADE SCRUBS - ORGANIC' },
            { url: '/images/product2.jpg', desc: 'Lorem ipsum dolor sit amet consectetur. Est ipsum malesuada tincidunt pretium at...', title: 'HOME-MADE SCRUBS - ORGANIC' }].map((item, index) => <Card key={index} url={item.url} desc={item.desc} title={item.title} />)}</div>
            <Card3 />
          </div>

          <div className='flex flex-col justify-between items-center mb-[65px]'>
            {["/images/product4.jpg", "/images/product5.jpg", "/images/product6.jpg"].map((url) => <Card2 imageUrl={url} />)}
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------------- */}


      <div id='bottom' className='flex justify-center w-full mb-[56px]'>
        <div data-state="hover" className="w-40  h-7 px-4 py-2.5  outline-1 outline-offset-[-1px] outline-black inline-flex justify-center items-center gap-4 cursor-pointer">
          <button className="text-center justify-start text-black text-[10px] font-normal font-['Sansation'] leading-3 tracking-wide">VIEW ALL</button>
        </div>
      </div>
      {/* FOOTER----------------------------------------------------------------- */}
      <Footer />
    </>
  );
};

export default App;
