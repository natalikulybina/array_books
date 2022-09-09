const books = [
  {
    name: 'Dune',
    author: 'Frank Herbert',
    genre: 'Fantasy',
    year: 1965,
  },

  {
    name: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    genre: 'Adventure',
    year: 1883,
  },

  {
    name: 'The Notebook',
    author: 'Nicholas Sparks',
    genre: 'Romance',
    year: 1966,
  },

  {
    name: 'The Shining',
    author: 'Stephen King',
    genre: 'Mystery',
    year: 1977,
  },

  {
    name: 'Angels and Demons',
    author: 'Dan Brown',
    genre: 'Thriller',
    year: 2000,
  },

  {
    name: 'Flowers for Algernon',
    author: 'Daniel Keyes',
    genre: 'Fantasy',
    year: 1959,
  },

  {
    name: 'Dandelion Wine',
    author: 'Ray Bradbury',
    genre: 'Fantasy',
    year: 1957,
  },

  {
    name: 'Smile',
    author: 'Ray Bradbury',
    genre: 'Fantasy',
    year: 1952,
  },

  {
    name: 'Dracula',
    author: 'Bram Stoker',
    genre: 'Horror',
    year: 2010,
  },

  {
    name: 'Solaris',
    author: 'Stanislav Lem',
    genre: 'Fantasy',
    year: 2020,
  },

  {
    name: 'Lord of the Rings',
    author: 'John Ronald Reuel Tolkien',
    genre: 'Fantasy',
    year: 1954,
  },
  
]


const bestGenre = books.filter(index => index.genre === 'Fantasy').map(index => index.name.toUpperCase());
console.log(bestGenre);

const twentiethCentury = books.filter(index => index.year > 1900 && index.year <= 2000).map(index => index.name);
console.log(twentiethCentury);

const twentyFirstCentury = books.filter(index => index.year > 2000 && index.year <= 2100).map(index => index.name);
console.log(twentyFirstCentury);
