import React, { useState } from "react";


const Projects = () => {
    const [isHovered, setIsHovered] = useState(false);
    const projects = [
        {
            name: 'Note Nest',
            technologies: ['Javascript', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Google Authentication', 'bcrypt.js', 'Router'],
            description: 'Note Nest is a simple app meant to assist people like myself who like being able to compare notes, all in one place simply, quickly, easily and intuitively. When you create a note you can assign the Note up to three tags which can be used to quickly and easily find and reference your notes. You are able to give a note a custom Title color and reference notes in other notes (the note text will show up differently). There are up to three resizable tabs the central tab for whichever note you are currently working on the left for searching and browsing your notes and the right for comparing and viewing other notes.',
            blurb: 'A Note Taking App for visual thinkers, folks with ADHD and those looking to try a new way of taking notes.',
            link: 'https://github.com/nolannash/note-nest',
            status: 'In Development',
            logo: '',
            notes_and_thoughts: 'This is the first real project I have worked on since completing my certificate at Flatiron School and it has been one heck of a learning experience. From learning how to use Next.js, creating responsive and intuitive components using Tailwind and my first project with a NoSQL Database. After getting part of the way through I realized that my original project idea needed a relational database leading to me taking some time off from the project to learn more about cloud solutions, NoSQL databases and more.',
        },
        {
            name: 'Commissioner',
            technologies: ['Javascript','Python','Flask','MUI','React.js','Bcrypt','Image uploads','Full auth,'],
            description: 'This is an application that I created with two goals in mind. The first was to help commission based artists have one easy place to create, post, automate and otherise mannage their commission based items. To do this, when an item is created, the artist sets a batch size and rollover period (rollover period is measured in days). Once the item is created, the rollover timer starts, and within one rollover period, an artist will only receive commissions equal to the batch size. Additionally, the artist is able to create a custom form asking the customer to fill out any needed information such as their measurements, color preferences and other information. On the customer side, the customer is able to commission items from artists as well as add both artists and items to their favorites, so that if the commissions for an item they want are currently full they can get an email notification when it becomes available again',
            blurb: 'An app intended to streamline commissions as a commission based artist while making commission based art and items more accesible to customers.',
            gh_link: 'https://github.com/nolannash/commissioner-app',
            status: 'In Development', 
            logo: 'test',
            notes_and_thoughts: 'This was my capstone project at Flatiron School and while I am very proud of it, in the time since I finished the course I have already learned so much. I never got to deploy this project because I was struggling with uploading, storing, accessing and styling images. I plan to revamp this project for a "v2" that uses Tailwind for the CSS, is fully integrated with the cloud and more.',
        },
        {
            name: 'Flat Ticket',
            technologies: ['Javascript','Python','React','Flask','SQL','Flask SQLAlchemy','Flask bcrypt','Flask Faker','Formik','semantic-ui','Yup'],
            description: 'Application intended to allow users to browse concerts by a variety of different factors and then add them to an attending list. Users are able to view Concerts by artist, by tour, date and location (all of that data was created using Faker). Users can add and remove a concert from their list of planned attendances.',
            blurb: 'A way to view a concerts, tours, venues in a variety of views. Create a list of the shows you WANT to see.',
            link: 'https://github.com/montaguehb/phase-4-full-stack-project',
            status: 'Complete (not deployed)',
            logo: 'test',
            notes_and_thoughts: 'This was the second to last project I created at Flatiron and honestly I am not super proud of it. There were a lot of issues that could have been avoided such as the images for the tours, the view (based on what youre looking at) and other stuff. It works though which is something I still am astounded at considering I started this project having coded for just 10 weeks.',
        },
        {
            name: 'Dev.exe(cute)',
            technologies: ['Python'],
            description: 'This game while it might on the surface be a super straight forward Hangman game created in the CLI. This is mostly true, however there are several different features and little parts of the game that add to it. The first is the difficulty, and by association the scoring. There are three different difficulty levels each with a list of words that were generated by an AI to fit the difficulty parameters we created. Then scoring is calculated based on the difficulty level and several other factors, with a small algorithm. If I ever get around to working more on this I would love to have prompts created and straight up just use AI to generate all of the words instead of a list. The second notable feature is the ability to create a profile, and then see your scores based on the specific words you have solved. ',
            blurb: 'Hangman game played in the CLI created using Python',
            link: 'https://github.com/nolannash/CLI-HANGMAN',
            status: 'Complete',
            logo: 'test',
            notes_and_thoughts: 'This was the first project I created using Python during my time at Flatiron School and I had a lot of fun with it! There are changes that I could go back and make and I may end up doing that eventually, using Pygame and other features to expand the scale, improve performance and functionality etc. But for now this is simply a small project I had a lot of fun with.',
        },
    ];

    const ProjectCard = ({project}) =>{
        const [isOpen, setIsOpen] = useState(false);

        const toggleDetails = () => {
            setIsOpen(!isOpen);
        };
        return (
            <div className="outline outline-solid outline-4 outline-sky-700 rounded-lg m-8 justify-items hover:bg-opacity-75 pl-2 pb-2">

                {project?  (
                    <div>
                        <h1 className="text-6xl text-center font-bold pt-2">{project.name}</h1>
                        <p className="text-xl text-bold text-center mt-2 mb-2">{project.blurb}</p>
                    </div>
                ) : null}
            <div className="flex justify-center items-center mb-4">
                <span className="text-2xl mr-4 ">
                    <strong className="text-3xl">Project Status:</strong> {project.status}
                </span>
                <div className=" mx-4"></div>
                <a href={project.gh_link} className="text-blue-700 text-2xl text-center hover:underline" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                </a>
            </div>

            <details onClick={toggleDetails}>
                <summary className="text-3xl text-bold mb-2 text-center hover:text-blue-700">
                    {isOpen ? "click to close": "Learn More"  }
                </summary>
                <p className='text-xl p-2 text-bold'>
                    {project.description }
                </p>
                <p className="text-xl m-2 pl-8"><strong className="text-3xl">Technologies: </strong>{project.technologies.join(", ")}</p>
                <details className=" text-xl pl-8 pb-2"><summary><strong className="text-3xl">Personal Notes/Thoughts/Upcoming Changes </strong></summary>{project.notes_and_thoughts}</details>
            </details>


        </div>)}

        return (
            <div className="flex flex-col items-center justify-center h-full bg-transparent rounded-3xl outline-double outline-8 outline-sky-700 border-4 border-sky-700 shadow-2xl shadow-pink-400/30 mt-0 md:mt-2 lg:mt-1" style={{ fontFamily: "'VT323', sans-serif" }}>
                <button
                    className="text-6xl font-bold text-center text-white glow-effect transition-all"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <h1>Portfolio</h1>
                </button>
                {isHovered && (
                    <div className="text-center visible opacity-100 mb-4 text-xl transition-opacity duration-300">
                        <p>Hi there and welcome to my portfolio. Please feel free to take a look at my projects. I am always looking to start new projects.</p>
                    </div>
                )}
                <div className="overflow-y overflow-auto shadow-2xl rounded-3xl p-2" style={{ maxHeight: 'calc(100vh - 350px)' }}>
                    {projects.map(project => (
                        <div
                            key={project.name}
                            className="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl shadow-rounded hover:bg-opacity-100"
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

export default Projects;
