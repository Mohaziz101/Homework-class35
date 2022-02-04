//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const ul = document.createElement('ul');
  ul.setAttribute(
    'style',
    'list-style: none;  display: flex; flex-wrap:  wrap; padding: 30px; margin: 0 auto; justify-content: center;  width: calc(100% - 40px); '
  );

  books.forEach((bookList, i) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = `${bookList.title} - ${bookList.author}`;
    li.setAttribute(
      'style',
      'width: calc(27% - 52px); margin: 16px; padding: 11px; min-width: 300px'
    );

    if (bookList.alreadyRead) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }

    const img = document.createElement('img');
    img.style.width = '63%';
    img.src = `assets/${bookList.img}`;
    img.alt = `Book-cover/${bookList.img}`;


    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(img);
  });

  return ul;
}

function main() {
  const myBooks = [{
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      img: 'the_design_of_everyday_things.jpg',

      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      img: 'the_most_human_human.jpg',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      img: 'the_pragmatic_programmer.jpg',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);