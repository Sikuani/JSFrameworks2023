// array elements
type Person = {
  name: string;
  age: number;
  email: string;
};

// Array with type annotations
const people: Person[] = [
  { name: "Matina", age: 30, email: "matina@cancode.com" },
  { name: "Jamal", age: 40, email: "jamal@cancode.com" },
  { name: "Manuel", age: 40, email: "manuel@cancode.com" },
];


//+++++++++

type RetroCard = {
  text: string,
  upvoteCount: number;
  downvoteCount: number
}
type RetroCategory = {
  title: string,
  accentColor: string,
  cards: RetroCard[]
}

const toDoCategory: RetroCategory = {
  title: "To Do",
  accentColor: "coral",
  cards: [
    {
      text: "this is a card",
      upvoteCount: 0,
      downvoteCount: 0,
    },
    {
      text: "this is another card",
      upvoteCount: 0,
      downvoteCount: 0,
    },
  ],
};


// ++++++++++++
type BookType = {
  title: string;
  author: string;
  pages?: number;

}

const books:BookType[] = [{

  title: "Frankenstein",
  author: "Shelley",
  pages: 360

},

{

  title: "Dracula",

  author: "Stoker"

}]
