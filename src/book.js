import query from './query';

export function allBooks() {
  const sql = `
  select * 
  from hb.book
  order by id;
  `;
  return query(sql);
}
