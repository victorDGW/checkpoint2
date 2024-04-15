import { Resolver ,  Mutation,
  Query,} from "type-graphql";

@Resolver()
export class CountryResolver {
  @Query(() => String, { nullable: true })
  async hello() {
    return "Hello World";
  }
  

}