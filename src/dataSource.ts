import { DataSource } from 'typeorm'
// import { Book } from './entities/books.entity'

export default new DataSource({
  type: 'sqlite',
  database: './bdd/checkpoint.sqlite',
  entities: [],
  synchronize: true,
  // logging: ["query","error"],
  logging: true,
})
