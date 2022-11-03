import React from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimage.jpg";
import { Element } from "react-scroll";

function Home() {
	return (
		<Element id="home" name="home">
			<div>
				<div className="flex justify-between text-center md:mx-20 md:pt-32 pt-28 ">
					<div className=" w-3/4 h-96 shadow-xl rounded-full relative px-10 hidden md:block">
						<Image
							src={heroImage}
							alt="heroImage"
							layout="fill"
							objectFit="cover"
							className=" rounded-full cursor-pointer hidden md:block"
						/>
					</div>
					<div className="flex flex-col md:ml-20 mx-10 mt-10">
						<h1 className="font-bold text-7xl text-left mb-5">
							Hello, I am <span className="text-indigo-900">Thamsanqa Menzi</span>
						</h1>
						<p className="text-left font-normal font mb-5 flex-wrap">
						Who am I?, I am a full stack developer. I'm a hard
worker, I set high goals and I've been told I'm
persistent. My
motto is: If you want to win the lottery, you have to
make the money to buy a ticket. My weapons of choice are C# - Asp.Net, for my backend dev.
JavaScript is still teaching me how to React, coupled with CSS and HTML, I've been using these for
front end dev. My database of choice is MS SQL Server.
						</p>
						<a
							href="#"
							className="font-semibold text-white md:mt-10 mt-5 pt-5 bg-indigo-900 rounded-md w-60 h-16 text-lg hover:bg-black "
						>
							See My Portfolio !
						</a>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Home;
