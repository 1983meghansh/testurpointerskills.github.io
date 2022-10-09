// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "A Pointer is?",
    answer: "A variable that stores address of other variable",
    options: [
      "A keyword used to create variables",
      "A variable that stores address of an instruction",
      "A variable that stores address of other variable",
      "All of the above",
    ],
  },
  {
    numb: 2,
    question: "The reason for using pointers in a C program is",
    answer: "All of the above",
    options: [
      "Pointers allow different functions to share and modify their local variables",
      "To pass large structures so that complete copy of the structure can be avoided",
      "Pointers enable complex linked data structures like linked lists and binary trees",
      "All of the above",
    ],
  },
  {
    numb: 3,
    question:
      "The operator used to get value at address stored in a pointer variable is?",
    answer: "*",
    options: ["*", "&", "&&", "->"],
  },
  {
    numb: 4,
    question:
      "Can you combine the following two statements into one?,\nchar *p\np = (char*) malloc(100)",
    answer: "char *p = (char*)malloc(100);",
    options: [
      "char p = *malloc(100);",
      "char *p = (char) malloc(100);",
      "char *p = (char*)malloc(100);",
      "char *p = (char *)(malloc*)(100);",
    ],
  },
  {
    numb: 5,
    question: "What is (void*)0?",
    answer: "Representation of NULL pointer",
    options: [
      "Representation of NULL pointer",
      "Representation of void pointer",
      "Error",
      "None of above",
    ],
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  {
    numb: 6,
    question:
      "‘ptrdata’ is a pointer to a data type. The expression *ptrdata++ is evaluated as (in C++) :",
    answer: "*(ptrdata++)",
    options: [
      "Depends on compiler",
      "(*ptrdata)++",
      "*(ptrdata)++",
      "*(ptrdata++)",
    ],
  },
  {
    numb: 7,
    question: "What does the following C-statement declare?\n int (*f) (int*);",
    answer:
      "A pointer to a function that takes an integer pointer as argument and returns an integer",
    options: [
      "A function that takes an integer pointer as argument and returns an integer",
      "A function that takes an integer as argument and returns an integer pointer",
      "A pointer to a function that takes an integer pointer as argument and returns an integer",
      "A function that takes an integer pointer as argument and returns a function pointer",
    ],
  },
  {
    numb: 8,
    question: "The following ‘C’ statement : int * f [ ] ( ); declares:",
    answer: "Array of functions returning pointers to integers.",
    options: [
      "A function returning a pointer to an array of integers.",
      "Array of functions returning pointers to integers.",
      "A function returning an array of pointers to integers.",
      "An illegal statement.",
    ],
  },
  {
    numb: 9,
    question: "The statement int **a",
    answer: "is syntactically and semantically correct",
    options: [
      "is illegal",
      "is legal but meaningless",
      "is syntactically and semantically correct",
      "None of these",
    ],
  },
  {
    numb: 10,
    question:
      "What is the base data type of a pointer variable by which the memory would be allocated to it?",
    answer: "unsigned int",
    options: [
      "int",
      "float",
      "Depends upon the type of variable to which it is pointing",
      "unsigned int",
    ],
  },
  // {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: ["Option 1", "option 2", "option 3", "option 4"],
  // },
];
