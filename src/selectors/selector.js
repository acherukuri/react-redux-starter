export function authorsFormattedForDropdown(authors) {
  authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}
