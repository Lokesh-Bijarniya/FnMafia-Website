import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ActionAreaCard from "./ActionAreaCard";
import cardContent from "./CardData.js";

export default function Home() {
  const data = cardContent;
  return (
    <>
      <div
        className="pt-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://i.gifer.com/origin/c5/c5660392f5ffd5b4632dd944f3de2134_w200.webp")',
        }}
      >
        <div className="text-white p-6 sm:p-10 md:p-16 lg:w-3/4 xl:w-2/3 mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pb-4 sm:pb-6">
            FnMafia: Redefining Collaborative Innovation
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl pb-6 sm:pb-12">
            Empowering non-tech enthusiasts to collaborate with skilled techies
            for groundbreaking ventures.
          </p>
          <button className="text-white text-lg sm:text-xl p-2 sm:p-3 lg:p-4 rounded-md w-2/5 sm:w-1/4 bg-green-600 hover:bg-green-700 font-serif active:bg-violet-700">
            Join the Movement
          </button>
        </div>
      </div>

      <div className="bg-black text-white">
        <h2 className="text-2xl sm:text-3xl font-mono text-center py-4 sm:py-6">
          How to Start
        </h2>
        <div className="bg-cyan-600 h-0.5 w-1/2 mx-auto"></div>

        <h1 className="text-3xl sm:text-4xl text-center mt-4 sm:mt-6">
          You Imagine, We Create
        </h1>

        <div className="flex flex-wrap justify-evenly py-8 sm:py-12 ml-12">
          {data.map((item, index) => (
            <ActionAreaCard
              key={index}
              src={item.src}
              head={item.head}
              body={item.body}
            />
          ))}
        </div>
      </div>

      <div className="w-full md:w-screen h-auto md:h-108">
        <div className="flex flex-col mt-6 mb-6  md:flex-row mx-4 md:mx-20 h-full">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full md:w-2/3 h-full object-cover rounded-l-3xl"
          />
          <div className="md:w-3/4 bg-white mt-4 md:mt-0 ml-0 md:ml-4  md:-ml-44 rounded-r-3xl shadow-lg">
            <div className="p-6  md:p-10">
              <p className="text-base  md:text-xl font-sans">
                Innovating the tech landscape, FnMafia is more than a
                community—it's a dynamic hub for collaborative brilliance. Our
                mission, anchored in "Tech for Stake," fosters shared ownership,
                uniting tech enthusiasts and seasoned professionals to
                revolutionize entrepreneurship. Through seamless collaboration
                and real-world impact, we empower non-tech individuals to
                transform ideas into reality. Join us in shaping the future of
                tech-driven innovation.
              </p>
              <Link to="/about">
                <button className="text-white text-base md:text-2xl mt-6 md:mt-10 p-3 md:p-4 rounded-md w-2/5 md:w-auto bg-green-600 hover:bg-green-700 font-serif active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400">
                  About Us <ArrowForwardIcon />
                </button>
              </Link>
            </div>
            <div className="h-2 mt-9 rounded-r-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 text-white py-12">
        <div className="flex flex-col justify-around m-6 md:flex-row justify-center md:justify-between items-center md:space-x-10 lg:space-x-20">
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <img
              src="https://images.ctfassets.net/3viuren4us1n/2F8SkiLde22Yi6a7ag6lB8/3c4b6d6e4c2f890a50e6c04933332ac1/artificial-intelligence_3x.png?fm=webp&w=384"
              alt=""
              className="h-14 mb-4 md:mb-6 filter grayscale invert mx-auto"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-center">
              Enabling the breakthroughs of tomorrow, today
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-center">
              iLabs is TELUS International’s investment in R&D where innovators,
              researchers, and visionaries collaborate to explore emerging
              customer experience tech to disrupt the future.
            </p>
            <a href="#" className="text-green-500 text-center block">
              Co-create with iLabs <EastIcon />
            </a>
          </div>
          <div className="w-full md:w-1/3 mb-10 md:mb-0">
            <img
              src="https://images.ctfassets.net/3viuren4us1n/3F543fClBOehhhKlYjbZwc/bbfeb8080ff46d69e84e0d390a0e29a6/fuel_ix_icon.svg?w=384"
              alt=""
              className="h-14 mb-4 md:mb-6 filter grayscale invert mx-auto"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-center">
              Fuel iX: AI-fueled intelligent experiences
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-center">
              Discover our end-to-end customer experience solution, backed by
              the power of generative AI and designed to help you meet critical
              CX business needs faster than ever before.
            </p>
            <a href="#" className="text-green-500 text-center block">
              Learn more <EastIcon />
            </a>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="https://images.ctfassets.net/3viuren4us1n/6gnyZYuwlt6QnApiBANZMO/be7f91afdf9fc788152dbbc6b02497cd/generative-ai-icon.svg?w=256"
              alt=""
              className="h-14 mb-4 md:mb-6 filter grayscale invert mx-auto"
            />
            <h2 className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-6 text-center">
              Supporting your generative AI journey
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-center">
              Learn how our robust AI Data Solutions can help advance your
              generative AI initiatives with content generation, dataset
              engineering, model validation, and more.
            </p>
            <a href="#" className="text-green-500 text-center block">
              Explore <EastIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-screen h-full flex justify-center items-center">
        <div className="m-4 md:m-20 h-full bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-6 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
              Let’s connect and drive CX innovation
            </h1>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Learn how we can transform your customer experience organization
              today.
            </p>
            <Link to="/contact">
              <button className="text-white bg-green-600 hover:bg-green-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400 rounded-md px-4 md:px-6 py-2 md:py-3 text-base md:text-xl">
                Contact us
              </button>
            </Link>
          </div>
          <div className="flex-1">
            <img
              src="https://cdn.pixabay.com/photo/2019/05/10/14/23/contact-us-4193637_1280.jpg"
              alt=""
              className="w-full h-full object-cover rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import EastIcon from "@mui/icons-material/East";
// import { Link } from "react-router-dom";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ActionAreaCard from "./ActionAreaCard";
// import cardContent from "./CardData.js";

// export default function Home() {
//   const data = cardContent;
//   return (
//     <>
//       <div className="pt-16 place-content-center flex bg-[url('https://i.gifer.com/origin/c5/c5660392f5ffd5b4632dd944f3de2134_w200.webp')] bg-cover">
//         <div className="text-white p-40 w-3/4">
//           <h1 className="text-6xl pb-6">
//             FnMafia: Redefining Collaborative Innovation
//           </h1>
//           <p className="text-lg pb-12">
//             Empowering non-tech enthusiasts to collaborate with skilled techies
//             for groundbreaking ventures.
//           </p>
//           <button className="text-white text-2xl  p-2 rounded-md w-2/5 bg-green-600 hover:bg-green-700 font-serif active:bg-violet-700 ">
//             Join the Movement
//           </button>
//         </div>
//       </div>

//       <div className="bg-black h-108 text-white">
//         <h2 className="text-3xl text-white font-mono text-center  p-4">
//           How to Start
//         </h2>
//         <div className="bg-cyan-600 h-0.5 w-1/2 mx-96  inline-block "></div>

//         <h1 className="text-5xl text-center mt-4">You Imagine, We Create</h1>
//         <div className="flex m-12 p-16 justify-evenly">
//           <ActionAreaCard
//             src={data[0].src}
//             head={data[0].head}
//             body={data[0].body}
//           />
//           <ActionAreaCard
//             src={data[1].src}
//             head={data[1].head}
//             body={data[1].body}
//           />
//           <ActionAreaCard
//             src={data[2].src}
//             head={data[2].head}
//             body={data[2].body}
//           />
//         </div>
//       </div>

//       <div class="w-screen h-108 ">
//         <div class="flex  m-20 h-1/2">
//           <img
//             src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
//             alt=""
//             class=" w-2/3 rounded-l-3xl"
//           />
//           <div className=" h-96 w-3/4 mt-24 -ml-44  bg-white">
//             <div className="p-10">
//               <p className="text-xl font-sans">
//                 Innovating the tech landscape, FnMafia is more than a
//                 community—it's a dynamic hub for collaborative brilliance. Our
//                 mission, anchored in "Tech for Stake," fosters shared ownership,
//                 uniting tech enthusiasts and seasoned professionals to
//                 revolutionize entrepreneurship. Through seamless collaboration
//                 and real-world impact, we empower non-tech individuals to
//                 transform ideas into reality. Join us in shaping the future of
//                 tech-driven innovation.
//               </p>
//               <Link to="/about">
//                 <button className="text-white text-2xl mt-10 p-4 rounded-md w-2/5 bg-green-600 hover:bg-green-700 font-serif active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400">
//                   About Us <ArrowForwardIcon />
//                 </button>
//               </Link>
//             </div>
//             <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."></div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-700 p-20">
//         <div className="flex h-96 m-20 space-x-20 ">
//           <div className="w-1/3">
//             <img
//               src="https://images.ctfassets.net/3viuren4us1n/2F8SkiLde22Yi6a7ag6lB8/3c4b6d6e4c2f890a50e6c04933332ac1/artificial-intelligence_3x.png?fm=webp&w=384"
//               alt=""
//               className="h-14 mb-8 filter grayscale invert"
//             />
//             <h2 className="mb-10 text-white" style={{ fontSize: "30px" }}>
//               Enabling the breakthroughs of tomorrow, today
//             </h2>
//             <p className="mb-10 text-violet-100">
//               iLabs is TELUS International’s investment in R&D where innovators,
//               researchers and visionaries collaborate to explore emerging
//               customer experience tech to disrupt the future.
//             </p>
//             <a href="#" className="text-green-500 ">
//               Co-create with iLabs <EastIcon />
//             </a>
//           </div>
//           <div className="w-1/3">
//             <img
//               src="https://images.ctfassets.net/3viuren4us1n/3F543fClBOehhhKlYjbZwc/bbfeb8080ff46d69e84e0d390a0e29a6/fuel_ix_icon.svg?w=384"
//               alt=""
//               className="h-14 mb-8 filter grayscale invert"
//             />
//             <h2 className="mb-10  text-white" style={{ fontSize: "30px" }}>
//               Fuel iX: AI-fueled intelligent experiences
//             </h2>
//             <p className="mb-10 text-violet-100">
//               Discover our end-to-end customer experience solution, backed by
//               the power of generative AI and designed to help you meet critical
//               CX business needs faster than ever before.
//             </p>
//             <a href="#" className="text-green-500">
//               Learn more <EastIcon />
//             </a>
//           </div>
//           <div className="w-1/3 mb-10">
//             <img
//               src="https://images.ctfassets.net/3viuren4us1n/6gnyZYuwlt6QnApiBANZMO/be7f91afdf9fc788152dbbc6b02497cd/generative-ai-icon.svg?w=256"
//               alt=""
//               className="h-14 mb-8 filter grayscale invert"
//             />
//             <h2 className="mb-10 text-white" style={{ fontSize: "30px" }}>
//               Supporting your generative AI journey
//             </h2>
//             <p className="mb-10 text-violet-100">
//               Learn how our robust AI Data Solutions can help advance your
//               generative AI initiatives with content generation, dataset
//               engineering, model validation and more.
//             </p>
//             <a href="#" className="text-green-500">
//               Explore <EastIcon />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div class="w-screen h-108 flex justify-center items-center">
//         <div class="m-20 h-1/2 bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//           <div class="flex-1 p-8 ">
//             <h1 class="text-5xl font-bold mb-4">
//               Let’s connect and drive CX innovation
//             </h1>
//             <p class="text-lg mb-6">
//               Learn how we can transform your customer experience organization
//               today.
//             </p>
//             <Link to="/contact">
//               <button class="text-white bg-green-600 hover:bg-green-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-green-400 rounded-md px-6 py-3 text-xl">
//                 Contact us
//               </button>
//             </Link>
//           </div>

//           <div class="flex-1">
//             <img
//               src="https://cdn.pixabay.com/photo/2019/05/10/14/23/contact-us-4193637_1280.jpg"
//               alt=""
//               class="w-full h-full object-cover rounded-r-3xl"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
