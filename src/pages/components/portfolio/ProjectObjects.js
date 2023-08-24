const ProjectObjects = [
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

export default ProjectObjects;
