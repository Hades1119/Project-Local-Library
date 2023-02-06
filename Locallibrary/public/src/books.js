function findAuthorById(authors, id) {
  const author = authors.find(person => {
    if (person.id === id) {
      return person
    }
  })
  return author
}

function findBookById(books, id) {
  const book = books.find(book => {
    if (book.id === id) {
      return book
    }
  })
  return book
}

function partitionBooksByBorrowedStatus(books) {
  const borrowed = books.filter(book => book.borrows[0].returned)
  const returned = books.filter(book => !book.borrows[0].returned)
  const combinedArray = [...returned, ...borrowed]
  return combinedArray
}


function getBorrowersForBook(book, accounts) {
  const borrowers = []
  book.borrows.forEach(borrower => {
    const person = borrower.id
    accounts.forEach(account => {
      if (account.id === person) {
        borrowers.push({...account, returned: borrower.returned})
      }
    })
  })
  return borrowers.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
