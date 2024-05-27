import OpenAI from "openai";

async function QuizObject(count, text, images) {

  const prompt = "Hello, you are provided with some content, I want you to learn the topic in the content\nand create " + count + "multiple choice questions from it so I can test/quiz my self on the topic. \nFeel free to use some knowledge you may find on the topic to make sure you provide accurate \nand context appropriate questions and answer choices. Return the questions in the format of \na JSON string, the object should be structured as:\n\n{\n    // n should be equal to the question number starting from 1 until " + count + "\n    n: {                                    \n        \"question\": \"Question string?\",     // the question\n        \"answers\": [\"zero\", \"one\", \"two\"]   // array of answers\n        \"correct\": 0                        // number of the correct answer\n    }\n\n}\n\nWhere question refers to the question being asked, each answer a potential answer, \nof which only one is correct, and at the end, the number of the correct answer as the \nindex of the answers array.\n\nFor example a list of two questions on the topic of JavaScript, where the correct  answer\nfor the first question is \"False\", and the second question \"print\":\n\n{\n    \"1\": {\n        \"question\": \"JavaScript was created before Java?\", \n        \"answers\":[\"True\", \"False\"], \n        \"correct\":1\n    }, \n    \"2\": { \n        \"question\": \"Which of the following is not JavaScript syntax?\", \n        \"answers\":[\"const\", \"function\", \"let\", \"print\"], \n        \"correct\":3\n    }\n}\n\nThe number of answer choices should be between 2-4, and only one should be \ncorrect. Remember this is for a quiz, to test my knowledge on the topic I gave you, \nso the questions need to be based on the topic/content given, and answer options need to be \nrelevant, but only one should be correct, like the example on javascript above, print is \nvalid python (and other programming languages) syntax, but not valid JavaScript syntax, \nmaking the question objective (it's either valid syntax or not) but not obvious \n(like the answer being \"guitar\"). You may not always find answer options from the \ncontent given, that's when you should use your general and topic specific knowledge \nto come up with good, context appropriate options."

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  let response;

  if (images.length > 0) {
    // for images/pdf
    response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: addImagesToMessage(images, prompt),
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

  } else {
    // for text 
    response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          "role": "system",
          "content": [
            {
              "type": "text",
              "text": prompt
            }
          ]
        },
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": text
            }
          ]
        }
      ],
      temperature: 1,
      max_tokens: 4096,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

  }

  const quiz = JSON.parse(response.choices[0].message.content)
  return quiz;
}

function addImagesToMessage(images, prompt) {

  let message = [
    {
      "role": "system",
      "content": [
        {
          "text": prompt,
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": ""
        }
      ]
    }
  ];

  // iterate through images in image array
  for (let i = 0; i < images.length; i++) {
    let imgContent = {
      "type": "image_url",
      "image_url": {
        "url": images[i]
      }
    }
    // access the content array in message array
    message[1].content.push(imgContent);

  }

  return message;

}

export default QuizObject;