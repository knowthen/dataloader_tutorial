import { allBooks } from './book';
import { reviewByBookId } from './review';

export default {
  Query: {
    books: () => {
      return allBooks();
    },
  },
  Book: {
    reviews: (book, args, context) => {
      const { loaders } = context;
      const { reviewsLoader } = loaders;
      return reviewsLoader.load(book.id);
    },
  },
};
