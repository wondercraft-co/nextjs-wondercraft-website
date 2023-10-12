function generator(plop) {
  plop.setGenerator("component", {
    description: "Create an atomic component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name please",
      },
      {
        type: "list",
        name: "type",
        message: "What type of component is this?",
        choices: ["atoms", "molecules", "organisms"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "../../src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./templates/component.hbs",
      },
      {
        type: "add",
        path: "../../src/components/{{type}}/{{pascalCase name}}/index.ts",
        templateFile: "./templates/index.hbs",
      },
      {
        type: "add",
        path: "../../src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "./templates/story.hbs",
      },
    ],
  });
}

module.exports = generator;
