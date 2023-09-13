const quizData = [
    {
      id: 1,
      title: 'What is JSX?',
      info:'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.',
    },
    {
      id: 2,
      title: 'Can web browsers read JSX directly? ',
      info:'Web browsers cannot read JSX directly. This is because they are built to only read regular JS objects and JSX is not a regular JavaScript object . For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel',
    },
    {
      id: 3,
      title: ' What is the virtual DOM?',
      info:'DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.',
    },
    {
      id: 4,
      title: 'How do you create an event in React?',
      info:'An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc. => React events are named using camelCase, rather than lowercase in HTML. => With JSX, you pass a function as the event handler, rather than a string in HTML.',
    },
    {
      id: 5,
      title: 'What are forms in React?',
      info:'React employs forms to enable users to interact with web applications. =>Using forms, users can interact with the application and enter the required information whenever needed. Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons, etc . => Forms are used for many different tasks such as user authentication, searching, filtering, indexing, etc',
    },
  ]
  export default quizData