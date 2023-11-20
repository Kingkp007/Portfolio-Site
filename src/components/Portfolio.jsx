import React from 'react';
import blogapp from "../assets/portfolio/blogapp.jpg" ;
import moviesinfo from "../assets/portfolio/moviesinfo.jpg" ;
import docsystem from "../assets/portfolio/docapp.jpg";

// import usestate from "../assets/portfolio/usestate.jpg" ;

const Portfolio = () => {

        // const handleDemo = (url) => {
        //     // const url = portfolios[key-1].demo ;
        //     (window.open(url, '_blank', ));
        // }
        
        // const handleCode = (key) => {
        //     const url = portfolios[key-1].code ;
        //     return (window.open(url, '_blank', 'noopener,noreferrer'));
        // }


    const portfolios = [
        {
            id:1,
            src:blogapp,
            demo:'https://blogapp-kshitish.netlify.app/login',
            code:'https://github.com/Kingkp007/MERN-BlogApp'
        },
        {
            id:2,
            src:moviesinfo,
            demo:'https://moviesinfo-app-kshitish.netlify.app/',
            code:'https://github.com/Kingkp007/ReactMovieInfoApp'
        },
        {
            id:3,
            src:docsystem,
            demo:'https://doctorapp-4vr6.onrender.com/',
            code:'https://github.com/Kingkp007/Production-Doc-Appointment-System'
        },
    ]
  return (
    <div name="portfolio" 
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work here</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
                portfolios.map(({id,src,demo,code}) => (
                    <div key ={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt ="" className="rounded-md duration-200 hover:scale-105" />
                    <div className="flex items-center justify-center">
                    
                    {/* onClick ={handleDemo(demo)} */}
                    {/* onClick ={handleCode({id})} */}
                    <a href={demo} target="_blank" rel="noreferrer">
                        <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                    </a>

                    <a href={code} target="_blank" rel="noreferrer">
                        <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </a>
                    </div>
                </div>
                ))
            }   
            </div>

        </div>
    </div>
  )
}

export default Portfolio