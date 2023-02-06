function findAccountById(accounts, id) {
  const user = accounts.find(person => person.id.includes(id))
  if (user === undefined) return `No Account Found`
  return user
}

function sortAccountsByLastName(accounts) {
  if (!accounts) return []
  return accounts.sort((user1, user2) => user1.name.last > user2.name.last ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  books.forEach(book => {
    book.borrows.forEach(borrower => {
      if (borrower.id === account.id) total++
    })
  })
  return total
}


function getBooksPossessedByAccount(account, books, authors) {
  return books.reduce((resultArray, book) => {
    for (let borrow of book.borrows) {
      if (borrow.returned === false && borrow.id === account.id) {
        const author = authors.find(author => book.authorId === author.id)
        resultArray.push({...book, author})
        return resultArray
      }
    }
    return resultArray
  }, [])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
