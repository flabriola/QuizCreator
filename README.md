# Quiz Creator

### Live now at: https://flabriola.github.io/quiz/

Quiz Creator is an interactive Web App aimed to facilitate the creation of Quizzes based on given content with use of Artificial Intelligence. The app accepts content (or ready JSON structured quiz) and using GPT-4o, through the OpenAI API, creates a multiple-choice quiz to test your knowledge on the given topic.

Aimed to help study specific topics and subjects, stemmed from the personal lack of practice quizzes for individual specific topics/subjects in university.

### Technology

The Website was developed with React.js and Node.js. It is mainly JavaScript and CSS. It currently uses an express.js backend to handl ethe pdf to image converter (which is used to create the quiz from documents rather than text), however due to issues with the Imgur API, the function is currenlty diabled.

#### OpenAi API

The OpenAi API is integrated using Node.js. The application uses a promise that creates the QuizObject, which accepts a number and text or images URLs, sends a request to the API with a preset prompt asking GPT-4o to return the questions and answers in the given format, a JSON string. QuizObject returns the string parsed into a JSON object. The implementation can be found at src/Components/QuizObject.js

### Further Improvements and Features

The application is far from being finished, there are multiple functionalities and features I'd like to tweak and add. This was built so I could personally use it for my studies, but there are many cool things I'd still like to do.

- PDF and Image handling: As previously mentioned the app currently only accepts text for the creation, using GPT. However I'd like to fix/implement a new way to handle images and file uploading, so that the user can upload a pdf, power point, or images for the AI to create the questions based on content given in any/multiple formats.
- Responsive Design: Currently the stylying/structure or the app is only for desktop. I don't feel the usage of the app is suited for phones, as from previous experience studying on phones is often not very effective, it should be available nonetheless.
- Quiz Creating without AI: the first time I built the app there was no API or anything fancy, it was a textbox that parsed a JSON string and turned it into a quiz. I would ask GPT for it then paste it. This led me to add the JSON area, for those who wished to ask GPT their own way, but also those who wished writing their own questions and answers. Point being the JSON part for questions and answers from the user should be turned into a user friendly way of creating Q&As, nobody likes writing JSON strings. Another idea on top of this could even be AI suggestions on the possible answer choices.
- Login/accounts: Adding accounts and logins so people can save their quizzes, view history, share quizzes with others (why the above would be useful).
- Better Quizzes: currenlty the prompt is a simple "...create a multiple choice quiz...", in the future further customization must added, such as, add questions that use images, or graphs, or multi-select, etc.
- Embedding AI: Instead of using the OpenAi API, perhaps the app could directly use open-source AI models.

### Notes

This project is not aimed to be a popular website, app, etc. I first got the idea because I seriously struggle with the lack of practice my university offers, maybe no universities do, and that's part of it, you should go out and explore the topics on your own, which is fair. However, when I have quizzes, or exams, a lot of the times there are questiosn on it that are very specific, very little things, which sometimes you can only get right, if you know the course material well, so quizzes specifically built based on the content from lectures, notes, etc, can often be helpful. It started as a shell script, then a very basic html/js. I decided to make something a bit more "fancy", "for the public" as a way to practice and gain experience building an (React) app from scratch, explore new technologies, and showcase my skills/experience. Also maybe somebody will find it useful ;)

Note: This is a mirror repository. Original reporsitory has API keys and I don't feel like setting up a bcakend to handle them so I left it private

