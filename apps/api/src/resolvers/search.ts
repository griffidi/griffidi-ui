import { GraphQLError } from 'graphql';
import {
  Args,
  ArgsType,
  Ctx,
  Field,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import type { Context } from '../client/context.ts';
import { SearchResultType } from '../constants/search-result-type.ts';

@ArgsType()
export class SearchArgs {
  @Field(() => String, { simple: true })
  query: string;
}

@ObjectType()
export class SearchResult {
  @Field(() => String, { nullable: true })
  id: string;

  @Field(() => Number, { nullable: true })
  type: SearchResultType;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  description: string;
}

@Resolver()
export class SearchResolver {
  @Query(() => [SearchResult], { nullable: true })
  async search(
    @Args(() => SearchArgs) { query }: SearchArgs,
    @Ctx() { prisma }: Context,
  ): Promise<SearchResult[] | null> {
    const customerQuery = prisma.customer.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      select: {
        id: true,
        name: true,
        city: true,
        state: true,
      },
    });

    const customer = await customerQuery;
    if (!customer) {
      throw new GraphQLError('Customer not found');
    }
    const searchResults = customer.map(customer => ({
      id: customer.id,
      type: SearchResultType.customer,
      name: customer.name,
      description: `${customer.city}, ${customer.state}`,
    }));
    return searchResults;
  }
}
