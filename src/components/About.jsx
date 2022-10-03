import React from 'react'

const About = () => {
  return (
    <div name="about" 
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
            Hi, I am a Mechanical Engineer by degree and a Web developer by profession. I completed my Bachelor's degree from Savitribai Phule Pune University in 2021 with First class with distinction(8.7 CGPA). I learned programming languages when I was in college and I found interest in it so I decided to pursue my career in computer science field.
            </p>
            <br />
            <p className="text-xl">
            I like to read books, play video games. Also I am a part time trader in stock market 
            </p>
        </div>
    </div>
  )
}

export default About