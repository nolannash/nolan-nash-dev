import React, { useState } from "react";

import discordIcon from '../../images/discord.png';
import linkedinIcon from '../../images/linkedin.png';
import githubIcon from '../../images/github.png';

const Contact = () => {
	const [detailsOpen, setDetailsOpen] = useState(false);
	const endpoint = "https://getform.io/f/208a7ae3-7e33-4238-b1f8-176309674c3d";

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		const formDataObject = {};
		formData.forEach((value, key) => {
			formDataObject[key] = value;
		});
		console.log(formDataObject);

		setDetailsOpen(false);
	};

	return (
		<div className="
		relative 
		top-0 
		left-0 
		h-full 
		items-center 
		bg-transparent 
		rounded-3xl 
		p-8 
		outline-double 
		outline-8 
		outline-fuchsia-950 
		border-4 
		border-fuchsia-950 
		bg-violet-600 
		bg-opacity-75 
		shadow-2xl 
		shadow-violet-400/40" 
		style={{ fontFamily: "'VT323', sans-serif" }}>

			<h1 className="
			text-6xl 
			font-bold 
			text-center 
			text-white 
			pb-5">
				Contact Me:
			</h1>

			<div className="overflow-auto" style={{ maxHeight: 'calc(100vh - 400px)' }}>

				<div className="text-center" style={{ fontFamily: "'VT323', sans-serif" }}>

				<div className="flex items-center justify-center p-4">

						<a href="#" target="_blank" rel="noopener noreferrer">
							<img src={discordIcon} alt="Discord" className="h-16 w-16 m-4 cursor-pointer" />
						</a>

						<a href="#" target="_blank" rel="noopener noreferrer">
							<img src={linkedinIcon} alt="LinkedIn" className="h-16 w-16 m-4 cursor-pointer" />
						</a>

						<a href="#" target="_blank" rel="noopener noreferrer">
							<img src={githubIcon} alt="GitHub" className="h-16 w-16 m-4 cursor-pointer" />
						</a>

					</div>

					<details open={detailsOpen}>
						<summary className="text-5xl font-semibold p-4">
							Start A Conversation
						</summary>

						<div className="text-3xl p-4">
							<form method="post" action={endpoint} onSubmit={handleSubmit}>
								<div className="flex flex-col items-center">
									<label className="w-2/3">
										Name
										<input 
										type="text" 
										name="name" 
										className="
											block 
											w-full 
											py-2 
											px-3 
											rounded-lg 
											bg-transparent 
											bg-opacity-75 
											bg-violet-700 
											hover:bg-violet-900 
											focus:bg-fuchsia-950 
											focus:shadow-2xl 
											focus:shadow-violet-900/90" 
										required />
									</label>

									<br />

									<label className="w-2/3">
										Email
										<input 
										type="email" 
										name="email" 
										className="
											block 
											w-full 
											py-2 
											px-3 
											rounded-lg 
											bg-transparent 
											bg-opacity-75 
											bg-violet-700 
											hover:bg-violet-900 
											focus:bg-fuchsia-950 
											focus:shadow-2xl 
											focus:shadow-violet-900/90" 
										required />
									</label>

									<br />

									<label className="w-2/3">
										Message
										<textarea 
										name="message" 
										rows="5" 
										className="
											block 
											w-full 
											py-2 
											px-3 
											rounded-lg 
											bg-transparent 
											bg-opacity-75 
											bg-violet-700 
											hover:bg-violet-900 
											focus:bg-fuchsia-950 
											focus:shadow-2xl 
											focus:shadow-violet-900/90" 
										required></textarea>
									</label>

									<br />

									<input 
									type="submit" 
									value="Submit" 
									className="
										block w-1/2 
										mx-auto py-2 px-4 
										bg-fuchsia-700 
										hover:bg-fuchsia-800 
										text-white
										font-semibold 
										rounded-md" />
								</div>

							</form>
						</div>
					</details>
				</div>
			</div>
		</div>
	);
};

export default Contact;
