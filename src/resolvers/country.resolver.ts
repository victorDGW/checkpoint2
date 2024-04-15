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
    if (code.length < 2 || code.length > 3) {
      throw new Error('Code must be  2 or 3  characters long')
    }
    const country = await Country.findOne({ where: { code } })
    // console.log('-------------country', country) // debug
    if (country === undefined) {
      return null
    } else {
      return country
    }
  }

  @Query(() => [Country])
  async countriesByContinentCode(
    @Arg('continent_code') continentCode: string
  ): Promise<Country[] | null> {
    try {
      const country = await Country.find({
        where: { continentCode: continentCode },
      })
      return country
    } catch (error) {
      throw new Error(`error occured ${JSON.stringify(error)}`)
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
