import { Length } from 'class-validator'
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

  @Query(() => Country, { nullable: true })
  async countryByCode(@Arg('code') code: string): Promise<Country | null> {
    if (code.length !== 2) {
      throw new Error('Code must be 2 characters long')
    }
    const country = await Country.findOne({ where: { code } })
    // console.log('-------------country', country) // debug
    if (country === undefined) {
      return null
    } else {
      return country
    }
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
