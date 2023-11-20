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
            Hi, I am an Engineer by degree and a Software developer by profession. I joined Infosys as a fresher and now I have 2+ years of awesome handson experience on various tools and technologies like Javascript, React, Node js, Java Springboot, MySQL, MongoDB, Jira, Git. Here in Infosys we work on Agile Methodology for a US client. Also I learn and develop exciing projects in my free time. 
            </p>
            <br />
            <p className="text-xl">
            I like to read books, learn new thing in free time. Also I like to play video games.
            </p>
        </div>
    </div>
  )
}

export default About