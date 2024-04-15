import { Resolver, Mutation, Query, Arg } from 'type-graphql'
import { Country, CountryCreateInput } from '../entities/country.entity'
import { validate } from 'class-validator'

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

  @Query(() => [Country], { nullable: true })
  async country(): Promise<Country[]> {
    const countries = await Country.find()
    return countries
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg('data', () => CountryCreateInput) data: CountryCreateInput
  ): Promise<Country> {
    const newCountry = new Country()
    Object.assign(newCountry, data)
    const errors = await validate(newCountry)
    if (errors.length === 0) {
      await newCountry.save()
      return newCountry
    } else {
      throw new Error(`Error occured: ${JSON.stringify(errors)}`)
    }
  }
}
