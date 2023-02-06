const { sort } = require("../../test/fixtures/books.fixture")

function findLength(item) {
  return item.length
}


function getTotalBooksCount(books) {
  return findLength(books)
}

function getTotalAccountsCount(accounts) {
  return findLength(accounts)
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter(book => !book.borrows[0].returned)
  return borrowed.length
}

function getMostCommonGenres(books) {
  const sortedGenres = {}
  books.forEach(book => {
    if (sortedGenres[book.genre]) {
      sortedGenres[book.genre] += 1
    } else {
      sortedGenres[book.genre] = 1
    }
  })
  const genreArray = Object.entries(sortedGenres)
  const sortGenreArray = genreArray.sort((genre1, genre2) => genre1[1] > genre2[1] ? -1 : 1)
  .slice(0, 5)
  const returnedArray = sortGenreArray.map(([name, count]) => ({ name, count }))
  return returnedArray
}

function getMostPopularBooks(books) {
  const popularBooks = {}
  books.forEach(book => {
    if (!popularBooks[book.title]) {
      popularBooks[book.title] = book.borrows.length 
    } else {
      popularBooks[book.title] = 1
    }
  })
  const popularBooksArray = Object.entries(popularBooks)
  const sortedBookArray = popularBooksArray.sort((book1, book2) => book1[1] > book2[1] ? -1 : 1)
  .slice(0, 5)
  const returnedArray = sortedBookArray.map(([name, count]) => ({ name, count }))
  return returnedArray
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = {}
  books.forEach(book => {
    const borrowed = book.borrows.length
    authors.forEach(author => {
      if (author.id === book.authorId) {
        const name = `${author.name.first} ${author.name.last}`
        if (popularAuthors[name]) {
          popularAuthors[name] = borrowed
        } else {
          popularAuthors[name] = borrowed
        }
      }
    })
  })
  const popularAuthorsArray = Object.entries(popularAuthors)
  const sortedAuthorArray = popularAuthorsArray.sort((author1, author2) => author1[1] > author2[1] ? -1 : 1)
  .slice(0, 5)
  const returnedArray = sortedAuthorArray.map(([name, count]) => ({ name, count }))
  return returnedArray
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
