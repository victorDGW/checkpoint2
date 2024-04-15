import { DataSource } from 'typeorm'
import { Country } from './entities/country.entity'

export default new DataSource({
  type: 'sqlite',
  database: './bdd/checkpoint.sqlite',
  entities: [Country],
  synchronize: true,
  // logging: ["query","error"],
  logging: true,
})
