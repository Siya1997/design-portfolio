import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { Element } from "react-scroll";

function services() {
	return (
		<Element id="services" name="services">
			<div className="w-full my-40 h-auto flex flex-col justify-center items-center ">
				<p className="text-sm uppercase text-gray-400">My Skills</p>
				<h1 className="text-indigo-900 text-6xl font-bold text-center">
					My Expertise
				</h1>
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex  flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<GiCardboardBox className="w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								HTML AND CSS
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							Front end Development work. 
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<HiColorSwatch className="w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								JavaScript
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-sm sm:text-left">
							Proficient in JavaScript and Vanilla JavaScript.
							Building reactive webpages is a lot of fun. 
						</p>
					</div>
				</div>

				{/* second grid */}
				<div className="flex justify-items-start items-center mx-40 gap-10 mt-20">
					<div className="flex flex-col justify-center items-center">
						{/* first block */}
						<div className="flex justify-center items-center cursor-pointer">
							<AiOutlineBlock className="w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold ">
								NextJS
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							This is my introduction to this framework, unlike React, it's a lot more
							awesome, I'm looking forward to buiding more static webpages with this framework.
						</p>
					</div>

					{/* second block */}
					<div className="flex flex-col justify-center items-center">
						<div className="flex justify-center items-center cursor-pointer">
							<MdDeveloperBoard className="w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md" />
							<h2 className="text-xl text-indigo-600 font-semibold">
								Design & Development
							</h2>
						</div>
						<p className="md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm">
							One of my expertise this year was developing systems using the SDLC. I had the
							pleasure of working with business analysts to gather requirements. This was a new 
							experience, I learnt to think of projects from a client perspective rather than just
							my own.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default services;
