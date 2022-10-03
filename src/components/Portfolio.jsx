import React from 'react';
import keeperApp from "../assets/portfolio/keeperApp.jpeg" ;
import movieInfo from "../assets/portfolio/movieInfo.jpeg" ;
import newsLetter from "../assets/portfolio/newsLetter.jpeg" ;
import toDoList from "../assets/portfolio/toDoList.jpeg" ;

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
            src:keeperApp,
            demo:'https://kshitishmovie.netlify.app/',
            code:'https://github.com/Kingkp007/React/tree/master/keeper-app'
        },
        {
            id:2,
            src:movieInfo,
            demo:'https://kshitishmovie.netlify.app/',
            code:'https://github.com/Kingkp007/React/tree/master/kpmovie-nation'
        },
        {
            id:3,
            src:newsLetter,
            demo:'https://protected-sands-71141.herokuapp.com/',
            code:'https://github.com/Kingkp007/Node-Mongodb'
        },
        {
            id:4,
            src:toDoList,
            demo:'https://polar-coast-99614.herokuapp.com/',
            code:'https://github.com/Kingkp007/ToDoList'
        }
    ]
  return (
    <div name="portfolio" 
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check Out some of my work here</p>
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