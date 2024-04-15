import { Resolver, Mutation, Query } from 'type-graphql'
import { Country } from '../entities/country.entity'

@Resolver(Country)
export class CountryResolver {
  @Query(() => String, { nullable: true })
  async hello() {
    return 'Hello World'
  }

  @Query(() => [Country], { nullable: true })
  async allCountry(): Promise<Country[]> {
    const countries = await Country.find()
    return countries
  }
}
