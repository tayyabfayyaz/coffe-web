import Image from "next/image";
import Navbar from "./components/navbar";
import React from "react";

export default function Home() {
  return (
    <>
    <Navbar />

      <div className="hero-section h-screen pb-5 w-full bg-no-repeat bg-cover pt-40 pl-10 sm:pl-16 md:pl-20">
            <h2 className="text-8xl text-white font-bold">Coffee Shop</h2>
            <p className="mt-16 sm:mt-12 md:mt-16 ml-5 font-mono text-lg text-white">more-or-less normal distribution letters, as opposed to using</p>
            <button className="w-[200px] h-[50px] rounded-lg ml-14 mt-16 text-white text-xl bg-red-600 hover:underline hover:decoration-black hover:decoration-4 duration-1000 ease-in-out sm:w-[180px] md:w-[200px] ">ABOUT US</button>
            <button className="w-[200px] h-[50px] rounded-lg ml-14 mt-16 text-red-600 text-xl bg-white hover:underline hover:decoration-black hover:decoration-4 duration-1000 ease-in-out sm:w-[180px] md:w-[200px] ">CALL NOW</button>
      </div>

        <div className="about-section my-5 px-10  h-fit mt-9 flex justify-around w-full">
            <div className="container-left w-6/12 py-3">
              <h2 className="text-5xl sm:text-3xl md:text-4xl text-black my-4 font-extrabold ">ABOUT OUR SHOP</h2>
              <p className="text-4xl text-gray-800 my-4">Coffee Distribution</p>
              <p className="text-xl text-gray-800  my-4">
                About Our shopCoffee distribution 'has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English.
                Many desktop publishing packages and web page editorhas a more-or-less normal distribution of letters, as oppos
              </p>
              <button className="h-16 w-40 border-2 rounded-md bg-inherit text-xl mt-9 text-red-600 border-red-600 hover:text-gray-600 hover:border-gray-600">See More</button>
            </div>
            <div className="container-right">
              <Image src="/about-img.png" alt="Loading" width={500} height={600} />
            </div>
        </div>

      <div className="offer-section w-full h-fit my-5">
        <h2 className="text-5xl mb-9 text-center text-black my-4 font-extrabold ">OUR COFFEE OFFER</h2>
        <div className="offer-box flex justify-around">
          <div className="img-box  w-1/4 h-52 mx-4 mt-5 ">
            <Image src="/img-1.png" alt="Loading" width={310} height={208} />
          </div>
          <div className="img-box  w-1/4 h-52 mx-4 mt-5 ">
            <Image src="/img-2.png" alt="Loading" width={310} height={208} />
          </div>
          <div className="img-box w-1/4 h-52 mx-4 mt-5 ">
            <Image src="/img-3.png" alt="Loading" width={310} height={208} />
          </div>
          <div className="img-box  w-1/4 h-52 mx-4 mt-5 ">
            <Image src="/img-4.png" alt="Loading" width={310} height={208} />
          </div>
        </div>
        
        <div className="offer-box-text flex justify-around">
          <div className="img-box border-4 border-gray-600 text-xl w-1/4 h-44 mx-4 bg-gray-900 cursor-pointer hover:bg-red-600">
            <h2 className="m-3 text-xl font-extrabold text-center text-white">TYPES OF COFFEE</h2>
            <p className="text-md mx-2 text-center text-white">Looking at its layout, The point of</p>
            <button className="h-12 w-40 mx-16 text-center py-2 border-2 rounded-md bg-inherit text-lg mt-2 text-white border-white">Read More</button>
          </div>
          <div className="img-box border-4 border-gray-600 text-xl w-1/4 h-44 mx-4 bg-gray-900 cursor-pointer hover:bg-red-600">
            <h2 className="m-3 text-xl font-extrabold text-center text-white">BEANS VARIETIES</h2>
            <p className="text-md mx-2 text-center text-white">Looking at its layout, The point of</p>
            <button className="h-12 w-40 mx-16 text-center py-2 border-2 rounded-md bg-inherit text-lg mt-2 text-white border-white">Read More</button>
          </div>
          <div className="img-box border-4 border-gray-600 text-xl w-1/4 h-44 mx-4 bg-gray-900 cursor-pointer hover:bg-red-600">
            <h2 className="m-3 text-xl font-extrabold text-center text-white">COFFEE & PASTARY</h2>
            <p className="text-md mx-2 text-center text-white">Looking at its layout, The point of</p>
            <button className="h-12 w-40 mx-16 text-center py-2 border-2 rounded-md bg-inherit text-lg mt-2 text-white border-white">Read More</button>
          </div>
          <div className="img-box border-4 border-gray-600 text-xl w-1/4 h-44 mx-4 bg-gray-900 cursor-pointer hover:bg-red-600">
            <h2 className="m-3 text-xl font-extrabold text-center text-white">COFFEE TO GO</h2>
            <p className="text-md mx-2 text-center text-white">Looking at its layout, The point of</p>
            <button className="h-12 w-40 mx-16 text-center py-2 border-2 rounded-md bg-inherit text-lg mt-2 text-white border-white">Read More</button>
          </div>
          
      </div>

      </div>

        <h2 className="text-5xl mb-9 text-center text-black mt-14 font-extrabold">OUR BLOGS</h2>
      <div className="blog-section w-full h-fit my-9 flex justify-around">

        <div className="blog-card w-[600px] h-[650px] bg-white mx-5 border-4 border-gray-600 cursor-pointer">
          <Image src="/blog-img1.png" alt="Loading" width={600} height={300}/>
          <h2 className="m-3 text-xl font-extrabold text-center text-black">PREP TECHNIQUES COFFEE</h2>
          <p className="text-md mx-2 text-black text-center">
            distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more
          </p>
          <button className="h-10 w-40 mx-[220px] text-center py-2 border-2 rounded-md bg-transparent text-lg mt-2 text-red-600 border-red-600 ">Read More</button>
        </div>
        <div className="blog-card w-[600px] h-[650px] bg-white mx-5 border-4 border-gray-600 cursor-pointer">
          <Image src="/blog-img2.png" alt="Loading" width={600} height={300}/>
          <h2 className="m-3 text-xl font-extrabold text-center text-black">ENJOY BEST COFFEE</h2>
          <p className="text-md mx-2 text-black text-center">
            distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a moredistracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more
          </p>
          <button className="h-10 w-40 mx-[220px] text-center py-2 border-2 rounded-md bg-transparent text-lg mt-2 text-red-600 border-red-600 ">Read More</button>
        </div>
      </div>

      <div className="contact-section w-full h-fit mt-24">
        <h2 className="text-5xl mb-9 text-center text-black my-14 font-extrabold">GET IN TOUCH</h2>
          <form action="" method="post">
            <input type="text" name="fname" id="fname" placeholder="Your Name" className="w-[600px] h-[60px] bg-slate-200 block mx-auto p-3 my-10 rounded-3xl "/>
            <input type="email" name="email" id="email" placeholder="Your Email" className="w-[600px] h-[60px] bg-slate-200 block mx-auto p-3 my-10 rounded-3xl "/>
            <input type="number" name="phone" id="phone" placeholder="Your Phone No." className="w-[600px] h-[60px] bg-slate-200 block mx-auto p-3 my-10 rounded-3xl "/>
            <input type="text" name="message" id="message" placeholder="Message" className="w-[600px] h-[100px] bg-slate-200 block mx-auto p-3 my-10 rounded-3xl "/>
            <button className="w-[150px] h-[50px] rounded-lg bg-transparent border-2 border-red-600 text-red-600 text-xl my-10 block mx-auto hover:border-black hover:text-black">Send</button>
          </form>
      </div>

      <footer className="w-full h-12 bg-gray-800 py-3">
          <h2 className="text-xl text-white text-center "> &copy; 2024 Muhammad Tayyab. All rights reserved.</h2>
      </footer>

    </>
  );
}
