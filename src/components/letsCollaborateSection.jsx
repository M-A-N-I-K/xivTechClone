import React from 'react'
import Child from "./child"
const letsCollaborateSection = () => {
    const content = [
        {
            title: "AI + RPA is what we do",
            buttonName: "AI + RPA Automation",
            textContent: "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
            imgSrc: "https://www.xivtech.io./rp2.jpg"
        },
        {
            title: "Make Bolder Choices",
            buttonName: "Build Better Apps",
            textContent: "Digital focused strategies to realize market-changing ideas",
            imgSrc: "https://www.xivtech.io./p1.png"
        },
        {
            title: "Innovate with Speed",
            buttonName: "DevOps",
            textContent: "Create higher quality software, deliver on customer expectations and business goals",
            imgSrc: "https://www.xivtech.io./p2.jpg"
        }
        ,
        {
            title: "Embrace Cloud",
            buttonName: "Cloud Services",
            textContent: "With Cloud-First accelerate innovation and optimize performance",
            imgSrc: "https://www.xivtech.io./p3.jpg"
        }
    ]
    return (
        <div className="w-[100vw] flex justify-center items-center">
            <div className="w-[100vw] lg:w-[65vw] flex flex-col justify-between items-center lg:items-start">
                <h1 className='text-2xl text-start font-bold pb-0 lg:pb-10'>Lets Collaborate</h1>
                {content.map((source, key) => {
                    return (
                        <Child key={key} title={source.title} buttonName={source.buttonName} textContent={source.textContent} imgSrc={source.imgSrc} />
                    );
                })}

                <button className="bg-black text-white w-40 rounded-sm py-4 px-6 my-10 border-2 hover:bg-white hover:text-black hover:border-2 hover:border-black">Get In Touch</button>

            </div>
        </div>
    )
}

export default letsCollaborateSection
