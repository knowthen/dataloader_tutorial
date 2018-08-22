import DataLoader from 'dataloader';
import { groupBy, map } from 'ramda';
import query from './query';

export function reviewByBookId(bookId) {
  const sql = `
  select * 
  from 
  hb.review 
  where book_id = $1;
  `;
  const params = [bookId];
  return query(sql, params);
}

export function reviewsDataLoader() {
  return new DataLoader(reviewsByBookIds);
}

async function reviewsByBookIds(bookIds) {
  const sql = `
  select * 
  from 
  hb.review 
  where book_id = ANY($1);
  `;
  const params = [bookIds];
  const reviews = await query(sql, params);
  const groupedById = groupBy(review => review.bookId , reviews);
  return map(bookId => groupedById[bookId] , bookIds);
}