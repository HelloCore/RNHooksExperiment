// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
var fs = require("fs");
var choices = [];
const dir = "src/components/";
const files = fs.readdirSync(dir);

files.forEach(function(file) {
  if (fs.statSync(dir + file).isDirectory()) {
    choices.push({
      name: file,
      value: file,
    });
  }
});

choices.push({
  name: "-------",
  message: "-------",
  hint: "",
  disabled: true,
});

choices.push({
  name: "New Group",
  value: "",
});

module.exports = {
  prompt: ({ prompter, args }) =>
    prompter
      .prompt({
        type: "input",
        name: "name",
        message: "What is your component's name? ",
      })
      .then(({ name }) =>
        prompter
          .prompt({
            type: "select",
            name: "group",
            message: "What is your component's group?",
            initial: 0,
            choices: choices,
          })
          .then(({ group }) => {
            if (group != null && group !== "New Group") {
              return Promise.resolve({ name, group });
            } else {
              return prompter
                .prompt({
                  type: "input",
                  name: "group",
                  message: "So, what is its name? ",
                })
                .then(answer => ({
                  ...answer,
                  name,
                }));
            }
          })
      ),
};
