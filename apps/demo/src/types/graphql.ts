import type {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: unknown; output: unknown };
}

export interface AffectedRowsOutput {
  readonly count: Scalars['Int']['output'];
}

export interface AggregateCustomer {
  readonly _count?: Maybe<CustomerCountAggregate>;
  readonly _max?: Maybe<CustomerMaxAggregate>;
  readonly _min?: Maybe<CustomerMinAggregate>;
}

export interface AggregateCustomerContact {
  readonly _count?: Maybe<CustomerContactCountAggregate>;
  readonly _max?: Maybe<CustomerContactMaxAggregate>;
  readonly _min?: Maybe<CustomerContactMinAggregate>;
}

export interface AggregateUser {
  readonly _count?: Maybe<UserCountAggregate>;
  readonly _max?: Maybe<UserMaxAggregate>;
  readonly _min?: Maybe<UserMinAggregate>;
}

export interface CreateManyAndReturnCustomer {
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zip: Scalars['String']['output'];
}

export interface CreateManyAndReturnCustomerContact {
  readonly city: Scalars['String']['output'];
  readonly customer: Customer;
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zip: Scalars['String']['output'];
}

export interface CreateManyAndReturnUser {
  readonly address: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
}

export interface Customer {
  readonly CustomerContact: ReadonlyArray<CustomerContact>;
  readonly _count?: Maybe<CustomerCount>;
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zip: Scalars['String']['output'];
}

export interface CustomerCustomerContactArgs {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface CustomerContact {
  readonly city: Scalars['String']['output'];
  readonly customer: Customer;
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zip: Scalars['String']['output'];
}

export interface CustomerContactCountAggregate {
  readonly _all: Scalars['Int']['output'];
  readonly city: Scalars['Int']['output'];
  readonly customerId: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly email: Scalars['Int']['output'];
  readonly firstName: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly lastName: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly state: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly zip: Scalars['Int']['output'];
}

export interface CustomerContactCountOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerContactCreateInput {
  readonly city: Scalars['String']['input'];
  readonly customer: CustomerCreateNestedOneWithoutCustomerContactInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zip: Scalars['String']['input'];
}

export interface CustomerContactCreateManyCustomerInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zip: Scalars['String']['input'];
}

export interface CustomerContactCreateManyCustomerInputEnvelope {
  readonly data: ReadonlyArray<CustomerContactCreateManyCustomerInput>;
}

export interface CustomerContactCreateManyInput {
  readonly city: Scalars['String']['input'];
  readonly customerId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zip: Scalars['String']['input'];
}

export interface CustomerContactCreateNestedManyWithoutCustomerInput {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<CustomerContactCreateWithoutCustomerInput>
  >;
  readonly createMany?: InputMaybe<CustomerContactCreateManyCustomerInputEnvelope>;
}

export interface CustomerContactCreateOrConnectWithoutCustomerInput {
  readonly create: CustomerContactCreateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
}

export interface CustomerContactCreateWithoutCustomerInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zip: Scalars['String']['input'];
}

export interface CustomerContactGroupBy {
  readonly _count?: Maybe<CustomerContactCountAggregate>;
  readonly _max?: Maybe<CustomerContactMaxAggregate>;
  readonly _min?: Maybe<CustomerContactMinAggregate>;
  readonly city: Scalars['String']['output'];
  readonly customerId: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zip: Scalars['String']['output'];
}

export interface CustomerContactListRelationFilter {
  readonly every?: InputMaybe<CustomerContactWhereInput>;
  readonly none?: InputMaybe<CustomerContactWhereInput>;
  readonly some?: InputMaybe<CustomerContactWhereInput>;
}

export interface CustomerContactMaxAggregate {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly customerId?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
}

export interface CustomerContactMaxOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerContactMinAggregate {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly customerId?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
}

export interface CustomerContactMinOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerContactOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
}

export interface CustomerContactOrderByWithAggregationInput {
  readonly _count?: InputMaybe<CustomerContactCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<CustomerContactMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<CustomerContactMinOrderByAggregateInput>;
  readonly city?: InputMaybe<SortOrder>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerContactOrderByWithRelationInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export enum CustomerContactScalarFieldEnum {
  City = 0,
  CustomerId = 1,
  DateCreated = 2,
  DateUpdated = 3,
  Email = 4,
  FirstName = 5,
  Id = 6,
  LastName = 7,
  Phone = 8,
  State = 9,
  StreetAddress = 10,
  Zip = 11,
}

export interface CustomerContactScalarWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface CustomerContactScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>
  >;
  readonly city?: InputMaybe<StringWithAggregatesFilter>;
  readonly customerId?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly email?: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly state?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  readonly zip?: InputMaybe<StringWithAggregatesFilter>;
}

export interface CustomerContactUpdateInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateOneRequiredWithoutCustomerContactNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerContactUpdateManyMutationInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerContactUpdateManyWithWhereWithoutCustomerInput {
  readonly data: CustomerContactUpdateManyMutationInput;
  readonly where: CustomerContactScalarWhereInput;
}

export interface CustomerContactUpdateManyWithoutCustomerNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<CustomerContactCreateWithoutCustomerInput>
  >;
  readonly createMany?: InputMaybe<CustomerContactCreateManyCustomerInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<
    ReadonlyArray<CustomerContactScalarWhereInput>
  >;
  readonly disconnect?: InputMaybe<
    ReadonlyArray<CustomerContactWhereUniqueInput>
  >;
  readonly set?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<CustomerContactUpdateWithWhereUniqueWithoutCustomerInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<CustomerContactUpdateManyWithWhereWithoutCustomerInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<CustomerContactUpsertWithWhereUniqueWithoutCustomerInput>
  >;
}

export interface CustomerContactUpdateWithWhereUniqueWithoutCustomerInput {
  readonly data: CustomerContactUpdateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
}

export interface CustomerContactUpdateWithoutCustomerInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerContactUpsertWithWhereUniqueWithoutCustomerInput {
  readonly create: CustomerContactCreateWithoutCustomerInput;
  readonly update: CustomerContactUpdateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
}

export interface CustomerContactWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly customer?: InputMaybe<CustomerRelationFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface CustomerContactWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerContactWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly customer?: InputMaybe<CustomerRelationFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface CustomerCount {
  readonly CustomerContact: Scalars['Int']['output'];
}

export interface CustomerCountCustomerContactArgs {
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface CustomerCountAggregate {
  readonly _all: Scalars['Int']['output'];
  readonly city: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly dateUpdated: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly state: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly zip: Scalars['Int']['output'];
}

export interface CustomerCountOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerCreateInput {
  readonly CustomerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutCustomerInput>;
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zip: Scalars['String']['input'];
}

export interface CustomerCreateManyInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zip: Scalars['String']['input'];
}

export interface CustomerCreateNestedOneWithoutCustomerContactInput {
  readonly connect?: InputMaybe<CustomerWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutCustomerContactInput>;
  readonly create?: InputMaybe<CustomerCreateWithoutCustomerContactInput>;
}

export interface CustomerCreateOrConnectWithoutCustomerContactInput {
  readonly create: CustomerCreateWithoutCustomerContactInput;
  readonly where: CustomerWhereUniqueInput;
}

export interface CustomerCreateWithoutCustomerContactInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly zip: Scalars['String']['input'];
}

export interface CustomerGroupBy {
  readonly _count?: Maybe<CustomerCountAggregate>;
  readonly _max?: Maybe<CustomerMaxAggregate>;
  readonly _min?: Maybe<CustomerMinAggregate>;
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly dateUpdated: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly state: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly zip: Scalars['String']['output'];
}

export interface CustomerMaxAggregate {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
}

export interface CustomerMaxOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerMinAggregate {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
}

export interface CustomerMinOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByWithAggregationInput {
  readonly _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByWithRelationInput {
  readonly CustomerContact?: InputMaybe<CustomerContactOrderByRelationAggregateInput>;
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerRelationFilter {
  readonly is?: InputMaybe<CustomerWhereInput>;
  readonly isNot?: InputMaybe<CustomerWhereInput>;
}

export enum CustomerScalarFieldEnum {
  City = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Id = 3,
  Name = 4,
  Phone = 5,
  State = 6,
  StreetAddress = 7,
  Zip = 8,
}

export interface CustomerScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<CustomerScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<CustomerScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<CustomerScalarWhereWithAggregatesInput>
  >;
  readonly city?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly state?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  readonly zip?: InputMaybe<StringWithAggregatesFilter>;
}

export interface CustomerUpdateInput {
  readonly CustomerContact?: InputMaybe<CustomerContactUpdateManyWithoutCustomerNestedInput>;
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerUpdateManyMutationInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerUpdateOneRequiredWithoutCustomerContactNestedInput {
  readonly connect?: InputMaybe<CustomerWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutCustomerContactInput>;
  readonly create?: InputMaybe<CustomerCreateWithoutCustomerContactInput>;
  readonly update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutCustomerContactInput>;
  readonly upsert?: InputMaybe<CustomerUpsertWithoutCustomerContactInput>;
}

export interface CustomerUpdateToOneWithWhereWithoutCustomerContactInput {
  readonly data: CustomerUpdateWithoutCustomerContactInput;
  readonly where?: InputMaybe<CustomerWhereInput>;
}

export interface CustomerUpdateWithoutCustomerContactInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerUpsertWithoutCustomerContactInput {
  readonly create: CustomerCreateWithoutCustomerContactInput;
  readonly update: CustomerUpdateWithoutCustomerContactInput;
  readonly where?: InputMaybe<CustomerWhereInput>;
}

export interface CustomerWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly CustomerContact?: InputMaybe<CustomerContactListRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface CustomerWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly CustomerContact?: InputMaybe<CustomerContactListRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface DateTimeFilter {
  readonly equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly not?: InputMaybe<NestedDateTimeFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
}

export interface DateTimeWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedDateTimeFilter>;
  readonly _min?: InputMaybe<NestedDateTimeFilter>;
  readonly equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
}

export interface Mutation {
  readonly createManyAndReturnCustomer: ReadonlyArray<CreateManyAndReturnCustomer>;
  readonly createManyAndReturnCustomerContact: ReadonlyArray<CreateManyAndReturnCustomerContact>;
  readonly createManyAndReturnUser: ReadonlyArray<CreateManyAndReturnUser>;
  readonly createManyCustomer: AffectedRowsOutput;
  readonly createManyCustomerContact: AffectedRowsOutput;
  readonly createManyUser: AffectedRowsOutput;
  readonly createOneCustomer: Customer;
  readonly createOneCustomerContact: CustomerContact;
  readonly createOneUser: User;
  readonly deleteManyCustomer: AffectedRowsOutput;
  readonly deleteManyCustomerContact: AffectedRowsOutput;
  readonly deleteManyUser: AffectedRowsOutput;
  readonly deleteOneCustomer?: Maybe<Customer>;
  readonly deleteOneCustomerContact?: Maybe<CustomerContact>;
  readonly deleteOneUser?: Maybe<User>;
  readonly updateManyCustomer: AffectedRowsOutput;
  readonly updateManyCustomerContact: AffectedRowsOutput;
  readonly updateManyUser: AffectedRowsOutput;
  readonly updateOneCustomer?: Maybe<Customer>;
  readonly updateOneCustomerContact?: Maybe<CustomerContact>;
  readonly updateOneUser?: Maybe<User>;
  readonly upsertOneCustomer: Customer;
  readonly upsertOneCustomerContact: CustomerContact;
  readonly upsertOneUser: User;
}

export interface MutationCreateManyAndReturnCustomerArgs {
  data: ReadonlyArray<CustomerCreateManyInput>;
}

export interface MutationCreateManyAndReturnCustomerContactArgs {
  data: ReadonlyArray<CustomerContactCreateManyInput>;
}

export interface MutationCreateManyAndReturnUserArgs {
  data: ReadonlyArray<UserCreateManyInput>;
}

export interface MutationCreateManyCustomerArgs {
  data: ReadonlyArray<CustomerCreateManyInput>;
}

export interface MutationCreateManyCustomerContactArgs {
  data: ReadonlyArray<CustomerContactCreateManyInput>;
}

export interface MutationCreateManyUserArgs {
  data: ReadonlyArray<UserCreateManyInput>;
}

export interface MutationCreateOneCustomerArgs {
  data: CustomerCreateInput;
}

export interface MutationCreateOneCustomerContactArgs {
  data: CustomerContactCreateInput;
}

export interface MutationCreateOneUserArgs {
  data: UserCreateInput;
}

export interface MutationDeleteManyCustomerArgs {
  where?: InputMaybe<CustomerWhereInput>;
}

export interface MutationDeleteManyCustomerContactArgs {
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface MutationDeleteManyUserArgs {
  where?: InputMaybe<UserWhereInput>;
}

export interface MutationDeleteOneCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface MutationDeleteOneCustomerContactArgs {
  where: CustomerContactWhereUniqueInput;
}

export interface MutationDeleteOneUserArgs {
  where: UserWhereUniqueInput;
}

export interface MutationUpdateManyCustomerArgs {
  data: CustomerUpdateManyMutationInput;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface MutationUpdateManyCustomerContactArgs {
  data: CustomerContactUpdateManyMutationInput;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface MutationUpdateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
}

export interface MutationUpdateOneCustomerArgs {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
}

export interface MutationUpdateOneCustomerContactArgs {
  data: CustomerContactUpdateInput;
  where: CustomerContactWhereUniqueInput;
}

export interface MutationUpdateOneUserArgs {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface MutationUpsertOneCustomerArgs {
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
}

export interface MutationUpsertOneCustomerContactArgs {
  create: CustomerContactCreateInput;
  update: CustomerContactUpdateInput;
  where: CustomerContactWhereUniqueInput;
}

export interface MutationUpsertOneUserArgs {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface NestedDateTimeFilter {
  readonly equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly not?: InputMaybe<NestedDateTimeFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
}

export interface NestedDateTimeWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedDateTimeFilter>;
  readonly _min?: InputMaybe<NestedDateTimeFilter>;
  readonly equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTimeISO']['input']>>;
}

export interface NestedIntFilter {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<NestedIntFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
}

export interface NestedStringFilter {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface NestedStringWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedStringFilter>;
  readonly _min?: InputMaybe<NestedStringFilter>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface Query {
  readonly aggregateCustomer: AggregateCustomer;
  readonly aggregateCustomerContact: AggregateCustomerContact;
  readonly aggregateUser: AggregateUser;
  readonly customer?: Maybe<Customer>;
  readonly customerContact?: Maybe<CustomerContact>;
  readonly customerContacts: ReadonlyArray<CustomerContact>;
  readonly customers: ReadonlyArray<Customer>;
  readonly findFirstCustomer?: Maybe<Customer>;
  readonly findFirstCustomerContact?: Maybe<CustomerContact>;
  readonly findFirstCustomerContactOrThrow?: Maybe<CustomerContact>;
  readonly findFirstCustomerOrThrow?: Maybe<Customer>;
  readonly findFirstUser?: Maybe<User>;
  readonly findFirstUserOrThrow?: Maybe<User>;
  readonly getCustomer?: Maybe<Customer>;
  readonly getCustomerContact?: Maybe<CustomerContact>;
  readonly getUser?: Maybe<User>;
  readonly groupByCustomer: ReadonlyArray<CustomerGroupBy>;
  readonly groupByCustomerContact: ReadonlyArray<CustomerContactGroupBy>;
  readonly groupByUser: ReadonlyArray<UserGroupBy>;
  readonly signin?: Maybe<Scalars['String']['output']>;
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
}

export interface QueryAggregateCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryAggregateCustomerContactArgs {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface QueryAggregateUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface QueryCustomerContactArgs {
  where: CustomerContactWhereUniqueInput;
}

export interface QueryCustomerContactsArgs {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface QueryCustomersArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstCustomerContactArgs {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface QueryFindFirstCustomerContactOrThrowArgs {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface QueryFindFirstCustomerOrThrowArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryFindFirstUserOrThrowArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryGetCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface QueryGetCustomerContactArgs {
  where: CustomerContactWhereUniqueInput;
}

export interface QueryGetUserArgs {
  where: UserWhereUniqueInput;
}

export interface QueryGroupByCustomerArgs {
  by: ReadonlyArray<CustomerScalarFieldEnum>;
  having?: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryGroupByCustomerContactArgs {
  by: ReadonlyArray<CustomerContactScalarFieldEnum>;
  having?: InputMaybe<CustomerContactScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<
    ReadonlyArray<CustomerContactOrderByWithAggregationInput>
  >;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface QueryGroupByUserArgs {
  by: ReadonlyArray<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QuerySigninArgs {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}

export interface QueryUserArgs {
  where: UserWhereUniqueInput;
}

export interface QueryUsersArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
}

export enum SortOrder {
  Asc = 0,
  Desc = 1,
}

export interface StringFilter {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface StringWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedStringFilter>;
  readonly _min?: InputMaybe<NestedStringFilter>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface User {
  readonly address: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
}

export interface UserCountAggregate {
  readonly _all: Scalars['Int']['output'];
  readonly address: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly email: Scalars['Int']['output'];
  readonly firstName: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly lastName: Scalars['Int']['output'];
  readonly password: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly role: Scalars['Int']['output'];
}

export interface UserCountOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserCreateInput {
  readonly address: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
}

export interface UserCreateManyInput {
  readonly address: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
}

export interface UserGroupBy {
  readonly _count?: Maybe<UserCountAggregate>;
  readonly _max?: Maybe<UserMaxAggregate>;
  readonly _min?: Maybe<UserMinAggregate>;
  readonly address: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
}

export interface UserMaxAggregate {
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly password?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly role?: Maybe<Scalars['String']['output']>;
}

export interface UserMaxOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserMinAggregate {
  readonly address?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly password?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly role?: Maybe<Scalars['String']['output']>;
}

export interface UserMinOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithAggregationInput {
  readonly _count?: InputMaybe<UserCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<UserMinOrderByAggregateInput>;
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithRelationInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export enum UserScalarFieldEnum {
  Address = 0,
  DateCreated = 1,
  Email = 2,
  FirstName = 3,
  Id = 4,
  LastName = 5,
  Password = 6,
  Phone = 7,
  Role = 8,
}

export interface UserScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly address?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly email?: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName?: InputMaybe<StringWithAggregatesFilter>;
  readonly password?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly role?: InputMaybe<StringWithAggregatesFilter>;
}

export interface UserUpdateInput {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
}

export interface UserUpdateManyMutationInput {
  readonly address?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
}

export interface UserWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly address?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly role?: InputMaybe<StringFilter>;
}

export interface UserWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly address?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly role?: InputMaybe<StringFilter>;
}

export type SigninQueryVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type SigninQuery = { readonly signin?: string | undefined };

export type GetCustomerContactsQueryVariables = Exact<{
  customerId: Scalars['String']['input'];
}>;

export type GetCustomerContactsQuery = {
  readonly customerContact?:
    | {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly streetAddress: string;
        readonly city: string;
        readonly state: string;
        readonly zip: string;
        readonly phone: string;
        readonly email: string;
        readonly dateCreated: unknown;
        readonly dateUpdated: unknown;
      }
    | undefined;
};

export type GetCustomersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCustomersQuery = {
  readonly customers: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly phone: string;
    readonly streetAddress: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
  }>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AffectedRowsOutput: ResolverTypeWrapper<AffectedRowsOutput>;
  AggregateCustomer: ResolverTypeWrapper<AggregateCustomer>;
  AggregateCustomerContact: ResolverTypeWrapper<AggregateCustomerContact>;
  AggregateUser: ResolverTypeWrapper<AggregateUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateManyAndReturnCustomer: ResolverTypeWrapper<CreateManyAndReturnCustomer>;
  CreateManyAndReturnCustomerContact: ResolverTypeWrapper<CreateManyAndReturnCustomerContact>;
  CreateManyAndReturnUser: ResolverTypeWrapper<CreateManyAndReturnUser>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerContact: ResolverTypeWrapper<CustomerContact>;
  CustomerContactCountAggregate: ResolverTypeWrapper<CustomerContactCountAggregate>;
  CustomerContactCountOrderByAggregateInput: CustomerContactCountOrderByAggregateInput;
  CustomerContactCreateInput: CustomerContactCreateInput;
  CustomerContactCreateManyCustomerInput: CustomerContactCreateManyCustomerInput;
  CustomerContactCreateManyCustomerInputEnvelope: CustomerContactCreateManyCustomerInputEnvelope;
  CustomerContactCreateManyInput: CustomerContactCreateManyInput;
  CustomerContactCreateNestedManyWithoutCustomerInput: CustomerContactCreateNestedManyWithoutCustomerInput;
  CustomerContactCreateOrConnectWithoutCustomerInput: CustomerContactCreateOrConnectWithoutCustomerInput;
  CustomerContactCreateWithoutCustomerInput: CustomerContactCreateWithoutCustomerInput;
  CustomerContactGroupBy: ResolverTypeWrapper<CustomerContactGroupBy>;
  CustomerContactListRelationFilter: CustomerContactListRelationFilter;
  CustomerContactMaxAggregate: ResolverTypeWrapper<CustomerContactMaxAggregate>;
  CustomerContactMaxOrderByAggregateInput: CustomerContactMaxOrderByAggregateInput;
  CustomerContactMinAggregate: ResolverTypeWrapper<CustomerContactMinAggregate>;
  CustomerContactMinOrderByAggregateInput: CustomerContactMinOrderByAggregateInput;
  CustomerContactOrderByRelationAggregateInput: CustomerContactOrderByRelationAggregateInput;
  CustomerContactOrderByWithAggregationInput: CustomerContactOrderByWithAggregationInput;
  CustomerContactOrderByWithRelationInput: CustomerContactOrderByWithRelationInput;
  CustomerContactScalarFieldEnum: CustomerContactScalarFieldEnum;
  CustomerContactScalarWhereInput: CustomerContactScalarWhereInput;
  CustomerContactScalarWhereWithAggregatesInput: CustomerContactScalarWhereWithAggregatesInput;
  CustomerContactUpdateInput: CustomerContactUpdateInput;
  CustomerContactUpdateManyMutationInput: CustomerContactUpdateManyMutationInput;
  CustomerContactUpdateManyWithWhereWithoutCustomerInput: CustomerContactUpdateManyWithWhereWithoutCustomerInput;
  CustomerContactUpdateManyWithoutCustomerNestedInput: CustomerContactUpdateManyWithoutCustomerNestedInput;
  CustomerContactUpdateWithWhereUniqueWithoutCustomerInput: CustomerContactUpdateWithWhereUniqueWithoutCustomerInput;
  CustomerContactUpdateWithoutCustomerInput: CustomerContactUpdateWithoutCustomerInput;
  CustomerContactUpsertWithWhereUniqueWithoutCustomerInput: CustomerContactUpsertWithWhereUniqueWithoutCustomerInput;
  CustomerContactWhereInput: CustomerContactWhereInput;
  CustomerContactWhereUniqueInput: CustomerContactWhereUniqueInput;
  CustomerCount: ResolverTypeWrapper<CustomerCount>;
  CustomerCountAggregate: ResolverTypeWrapper<CustomerCountAggregate>;
  CustomerCountOrderByAggregateInput: CustomerCountOrderByAggregateInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerCreateManyInput: CustomerCreateManyInput;
  CustomerCreateNestedOneWithoutCustomerContactInput: CustomerCreateNestedOneWithoutCustomerContactInput;
  CustomerCreateOrConnectWithoutCustomerContactInput: CustomerCreateOrConnectWithoutCustomerContactInput;
  CustomerCreateWithoutCustomerContactInput: CustomerCreateWithoutCustomerContactInput;
  CustomerGroupBy: ResolverTypeWrapper<CustomerGroupBy>;
  CustomerMaxAggregate: ResolverTypeWrapper<CustomerMaxAggregate>;
  CustomerMaxOrderByAggregateInput: CustomerMaxOrderByAggregateInput;
  CustomerMinAggregate: ResolverTypeWrapper<CustomerMinAggregate>;
  CustomerMinOrderByAggregateInput: CustomerMinOrderByAggregateInput;
  CustomerOrderByWithAggregationInput: CustomerOrderByWithAggregationInput;
  CustomerOrderByWithRelationInput: CustomerOrderByWithRelationInput;
  CustomerRelationFilter: CustomerRelationFilter;
  CustomerScalarFieldEnum: CustomerScalarFieldEnum;
  CustomerScalarWhereWithAggregatesInput: CustomerScalarWhereWithAggregatesInput;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerUpdateManyMutationInput: CustomerUpdateManyMutationInput;
  CustomerUpdateOneRequiredWithoutCustomerContactNestedInput: CustomerUpdateOneRequiredWithoutCustomerContactNestedInput;
  CustomerUpdateToOneWithWhereWithoutCustomerContactInput: CustomerUpdateToOneWithWhereWithoutCustomerContactInput;
  CustomerUpdateWithoutCustomerContactInput: CustomerUpdateWithoutCustomerContactInput;
  CustomerUpsertWithoutCustomerContactInput: CustomerUpsertWithoutCustomerContactInput;
  CustomerWhereInput: CustomerWhereInput;
  CustomerWhereUniqueInput: CustomerWhereUniqueInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeISO: ResolverTypeWrapper<Scalars['DateTimeISO']['output']>;
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  Query: ResolverTypeWrapper<{}>;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringFilter: StringFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: ResolverTypeWrapper<User>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserGroupBy: ResolverTypeWrapper<UserGroupBy>;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AffectedRowsOutput: AffectedRowsOutput;
  AggregateCustomer: AggregateCustomer;
  AggregateCustomerContact: AggregateCustomerContact;
  AggregateUser: AggregateUser;
  Boolean: Scalars['Boolean']['output'];
  CreateManyAndReturnCustomer: CreateManyAndReturnCustomer;
  CreateManyAndReturnCustomerContact: CreateManyAndReturnCustomerContact;
  CreateManyAndReturnUser: CreateManyAndReturnUser;
  Customer: Customer;
  CustomerContact: CustomerContact;
  CustomerContactCountAggregate: CustomerContactCountAggregate;
  CustomerContactCountOrderByAggregateInput: CustomerContactCountOrderByAggregateInput;
  CustomerContactCreateInput: CustomerContactCreateInput;
  CustomerContactCreateManyCustomerInput: CustomerContactCreateManyCustomerInput;
  CustomerContactCreateManyCustomerInputEnvelope: CustomerContactCreateManyCustomerInputEnvelope;
  CustomerContactCreateManyInput: CustomerContactCreateManyInput;
  CustomerContactCreateNestedManyWithoutCustomerInput: CustomerContactCreateNestedManyWithoutCustomerInput;
  CustomerContactCreateOrConnectWithoutCustomerInput: CustomerContactCreateOrConnectWithoutCustomerInput;
  CustomerContactCreateWithoutCustomerInput: CustomerContactCreateWithoutCustomerInput;
  CustomerContactGroupBy: CustomerContactGroupBy;
  CustomerContactListRelationFilter: CustomerContactListRelationFilter;
  CustomerContactMaxAggregate: CustomerContactMaxAggregate;
  CustomerContactMaxOrderByAggregateInput: CustomerContactMaxOrderByAggregateInput;
  CustomerContactMinAggregate: CustomerContactMinAggregate;
  CustomerContactMinOrderByAggregateInput: CustomerContactMinOrderByAggregateInput;
  CustomerContactOrderByRelationAggregateInput: CustomerContactOrderByRelationAggregateInput;
  CustomerContactOrderByWithAggregationInput: CustomerContactOrderByWithAggregationInput;
  CustomerContactOrderByWithRelationInput: CustomerContactOrderByWithRelationInput;
  CustomerContactScalarWhereInput: CustomerContactScalarWhereInput;
  CustomerContactScalarWhereWithAggregatesInput: CustomerContactScalarWhereWithAggregatesInput;
  CustomerContactUpdateInput: CustomerContactUpdateInput;
  CustomerContactUpdateManyMutationInput: CustomerContactUpdateManyMutationInput;
  CustomerContactUpdateManyWithWhereWithoutCustomerInput: CustomerContactUpdateManyWithWhereWithoutCustomerInput;
  CustomerContactUpdateManyWithoutCustomerNestedInput: CustomerContactUpdateManyWithoutCustomerNestedInput;
  CustomerContactUpdateWithWhereUniqueWithoutCustomerInput: CustomerContactUpdateWithWhereUniqueWithoutCustomerInput;
  CustomerContactUpdateWithoutCustomerInput: CustomerContactUpdateWithoutCustomerInput;
  CustomerContactUpsertWithWhereUniqueWithoutCustomerInput: CustomerContactUpsertWithWhereUniqueWithoutCustomerInput;
  CustomerContactWhereInput: CustomerContactWhereInput;
  CustomerContactWhereUniqueInput: CustomerContactWhereUniqueInput;
  CustomerCount: CustomerCount;
  CustomerCountAggregate: CustomerCountAggregate;
  CustomerCountOrderByAggregateInput: CustomerCountOrderByAggregateInput;
  CustomerCreateInput: CustomerCreateInput;
  CustomerCreateManyInput: CustomerCreateManyInput;
  CustomerCreateNestedOneWithoutCustomerContactInput: CustomerCreateNestedOneWithoutCustomerContactInput;
  CustomerCreateOrConnectWithoutCustomerContactInput: CustomerCreateOrConnectWithoutCustomerContactInput;
  CustomerCreateWithoutCustomerContactInput: CustomerCreateWithoutCustomerContactInput;
  CustomerGroupBy: CustomerGroupBy;
  CustomerMaxAggregate: CustomerMaxAggregate;
  CustomerMaxOrderByAggregateInput: CustomerMaxOrderByAggregateInput;
  CustomerMinAggregate: CustomerMinAggregate;
  CustomerMinOrderByAggregateInput: CustomerMinOrderByAggregateInput;
  CustomerOrderByWithAggregationInput: CustomerOrderByWithAggregationInput;
  CustomerOrderByWithRelationInput: CustomerOrderByWithRelationInput;
  CustomerRelationFilter: CustomerRelationFilter;
  CustomerScalarWhereWithAggregatesInput: CustomerScalarWhereWithAggregatesInput;
  CustomerUpdateInput: CustomerUpdateInput;
  CustomerUpdateManyMutationInput: CustomerUpdateManyMutationInput;
  CustomerUpdateOneRequiredWithoutCustomerContactNestedInput: CustomerUpdateOneRequiredWithoutCustomerContactNestedInput;
  CustomerUpdateToOneWithWhereWithoutCustomerContactInput: CustomerUpdateToOneWithWhereWithoutCustomerContactInput;
  CustomerUpdateWithoutCustomerContactInput: CustomerUpdateWithoutCustomerContactInput;
  CustomerUpsertWithoutCustomerContactInput: CustomerUpsertWithoutCustomerContactInput;
  CustomerWhereInput: CustomerWhereInput;
  CustomerWhereUniqueInput: CustomerWhereUniqueInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeISO: Scalars['DateTimeISO']['output'];
  DateTimeWithAggregatesFilter: DateTimeWithAggregatesFilter;
  Int: Scalars['Int']['output'];
  Mutation: {};
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeWithAggregatesFilter: NestedDateTimeWithAggregatesFilter;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringWithAggregatesFilter: NestedStringWithAggregatesFilter;
  Query: {};
  String: Scalars['String']['output'];
  StringFilter: StringFilter;
  StringWithAggregatesFilter: StringWithAggregatesFilter;
  User: User;
  UserCountAggregate: UserCountAggregate;
  UserCountOrderByAggregateInput: UserCountOrderByAggregateInput;
  UserCreateInput: UserCreateInput;
  UserCreateManyInput: UserCreateManyInput;
  UserGroupBy: UserGroupBy;
  UserMaxAggregate: UserMaxAggregate;
  UserMaxOrderByAggregateInput: UserMaxOrderByAggregateInput;
  UserMinAggregate: UserMinAggregate;
  UserMinOrderByAggregateInput: UserMinOrderByAggregateInput;
  UserOrderByWithAggregationInput: UserOrderByWithAggregationInput;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserScalarWhereWithAggregatesInput: UserScalarWhereWithAggregatesInput;
  UserUpdateInput: UserUpdateInput;
  UserUpdateManyMutationInput: UserUpdateManyMutationInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
}>;

export type AffectedRowsOutputResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AffectedRowsOutput'] = ResolversParentTypes['AffectedRowsOutput'],
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateCustomerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AggregateCustomer'] = ResolversParentTypes['AggregateCustomer'],
> = ResolversObject<{
  _count?: Resolver<
    Maybe<ResolversTypes['CustomerCountAggregate']>,
    ParentType,
    ContextType
  >;
  _max?: Resolver<
    Maybe<ResolversTypes['CustomerMaxAggregate']>,
    ParentType,
    ContextType
  >;
  _min?: Resolver<
    Maybe<ResolversTypes['CustomerMinAggregate']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateCustomerContactResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AggregateCustomerContact'] = ResolversParentTypes['AggregateCustomerContact'],
> = ResolversObject<{
  _count?: Resolver<
    Maybe<ResolversTypes['CustomerContactCountAggregate']>,
    ParentType,
    ContextType
  >;
  _max?: Resolver<
    Maybe<ResolversTypes['CustomerContactMaxAggregate']>,
    ParentType,
    ContextType
  >;
  _min?: Resolver<
    Maybe<ResolversTypes['CustomerContactMinAggregate']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateUserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser'],
> = ResolversObject<{
  _count?: Resolver<
    Maybe<ResolversTypes['UserCountAggregate']>,
    ParentType,
    ContextType
  >;
  _max?: Resolver<
    Maybe<ResolversTypes['UserMaxAggregate']>,
    ParentType,
    ContextType
  >;
  _min?: Resolver<
    Maybe<ResolversTypes['UserMinAggregate']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnCustomerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreateManyAndReturnCustomer'] = ResolversParentTypes['CreateManyAndReturnCustomer'],
> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnCustomerContactResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreateManyAndReturnCustomerContact'] = ResolversParentTypes['CreateManyAndReturnCustomerContact'],
> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnUserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CreateManyAndReturnUser'] = ResolversParentTypes['CreateManyAndReturnUser'],
> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Customer'] = ResolversParentTypes['Customer'],
> = ResolversObject<{
  CustomerContact?: Resolver<
    ReadonlyArray<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType,
    Partial<CustomerCustomerContactArgs>
  >;
  _count?: Resolver<
    Maybe<ResolversTypes['CustomerCount']>,
    ParentType,
    ContextType
  >;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerContactResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerContact'] = ResolversParentTypes['CustomerContact'],
> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['Customer'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerContactCountAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerContactCountAggregate'] = ResolversParentTypes['CustomerContactCountAggregate'],
> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateUpdated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerContactGroupByResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerContactGroupBy'] = ResolversParentTypes['CustomerContactGroupBy'],
> = ResolversObject<{
  _count?: Resolver<
    Maybe<ResolversTypes['CustomerContactCountAggregate']>,
    ParentType,
    ContextType
  >;
  _max?: Resolver<
    Maybe<ResolversTypes['CustomerContactMaxAggregate']>,
    ParentType,
    ContextType
  >;
  _min?: Resolver<
    Maybe<ResolversTypes['CustomerContactMinAggregate']>,
    ParentType,
    ContextType
  >;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerContactMaxAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerContactMaxAggregate'] = ResolversParentTypes['CustomerContactMaxAggregate'],
> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  dateCreated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetAddress?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerContactMinAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerContactMinAggregate'] = ResolversParentTypes['CustomerContactMinAggregate'],
> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerId?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  dateCreated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetAddress?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerCountResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerCount'] = ResolversParentTypes['CustomerCount'],
> = ResolversObject<{
  CustomerContact?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    Partial<CustomerCountCustomerContactArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerCountAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerCountAggregate'] = ResolversParentTypes['CustomerCountAggregate'],
> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateUpdated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerGroupByResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerGroupBy'] = ResolversParentTypes['CustomerGroupBy'],
> = ResolversObject<{
  _count?: Resolver<
    Maybe<ResolversTypes['CustomerCountAggregate']>,
    ParentType,
    ContextType
  >;
  _max?: Resolver<
    Maybe<ResolversTypes['CustomerMaxAggregate']>,
    ParentType,
    ContextType
  >;
  _min?: Resolver<
    Maybe<ResolversTypes['CustomerMinAggregate']>,
    ParentType,
    ContextType
  >;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerMaxAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerMaxAggregate'] = ResolversParentTypes['CustomerMaxAggregate'],
> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetAddress?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerMinAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['CustomerMinAggregate'] = ResolversParentTypes['CustomerMinAggregate'],
> = ResolversObject<{
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  dateUpdated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetAddress?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  zip?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeIsoScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
  createManyAndReturnCustomer?: Resolver<
    ReadonlyArray<ResolversTypes['CreateManyAndReturnCustomer']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateManyAndReturnCustomerArgs, 'data'>
  >;
  createManyAndReturnCustomerContact?: Resolver<
    ReadonlyArray<ResolversTypes['CreateManyAndReturnCustomerContact']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateManyAndReturnCustomerContactArgs, 'data'>
  >;
  createManyAndReturnUser?: Resolver<
    ReadonlyArray<ResolversTypes['CreateManyAndReturnUser']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateManyAndReturnUserArgs, 'data'>
  >;
  createManyCustomer?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateManyCustomerArgs, 'data'>
  >;
  createManyCustomerContact?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateManyCustomerContactArgs, 'data'>
  >;
  createManyUser?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateManyUserArgs, 'data'>
  >;
  createOneCustomer?: Resolver<
    ResolversTypes['Customer'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOneCustomerArgs, 'data'>
  >;
  createOneCustomerContact?: Resolver<
    ResolversTypes['CustomerContact'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOneCustomerContactArgs, 'data'>
  >;
  createOneUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOneUserArgs, 'data'>
  >;
  deleteManyCustomer?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    Partial<MutationDeleteManyCustomerArgs>
  >;
  deleteManyCustomerContact?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    Partial<MutationDeleteManyCustomerContactArgs>
  >;
  deleteManyUser?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    Partial<MutationDeleteManyUserArgs>
  >;
  deleteOneCustomer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOneCustomerArgs, 'where'>
  >;
  deleteOneCustomerContact?: Resolver<
    Maybe<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOneCustomerContactArgs, 'where'>
  >;
  deleteOneUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteOneUserArgs, 'where'>
  >;
  updateManyCustomer?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyCustomerArgs, 'data'>
  >;
  updateManyCustomerContact?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyCustomerContactArgs, 'data'>
  >;
  updateManyUser?: Resolver<
    ResolversTypes['AffectedRowsOutput'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateManyUserArgs, 'data'>
  >;
  updateOneCustomer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOneCustomerArgs, 'data' | 'where'>
  >;
  updateOneCustomerContact?: Resolver<
    Maybe<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOneCustomerContactArgs, 'data' | 'where'>
  >;
  updateOneUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateOneUserArgs, 'data' | 'where'>
  >;
  upsertOneCustomer?: Resolver<
    ResolversTypes['Customer'],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertOneCustomerArgs, 'create' | 'update' | 'where'>
  >;
  upsertOneCustomerContact?: Resolver<
    ResolversTypes['CustomerContact'],
    ParentType,
    ContextType,
    RequireFields<
      MutationUpsertOneCustomerContactArgs,
      'create' | 'update' | 'where'
    >
  >;
  upsertOneUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpsertOneUserArgs, 'create' | 'update' | 'where'>
  >;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  aggregateCustomer?: Resolver<
    ResolversTypes['AggregateCustomer'],
    ParentType,
    ContextType,
    Partial<QueryAggregateCustomerArgs>
  >;
  aggregateCustomerContact?: Resolver<
    ResolversTypes['AggregateCustomerContact'],
    ParentType,
    ContextType,
    Partial<QueryAggregateCustomerContactArgs>
  >;
  aggregateUser?: Resolver<
    ResolversTypes['AggregateUser'],
    ParentType,
    ContextType,
    Partial<QueryAggregateUserArgs>
  >;
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<QueryCustomerArgs, 'where'>
  >;
  customerContact?: Resolver<
    Maybe<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType,
    RequireFields<QueryCustomerContactArgs, 'where'>
  >;
  customerContacts?: Resolver<
    ReadonlyArray<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType,
    Partial<QueryCustomerContactsArgs>
  >;
  customers?: Resolver<
    ReadonlyArray<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    Partial<QueryCustomersArgs>
  >;
  findFirstCustomer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    Partial<QueryFindFirstCustomerArgs>
  >;
  findFirstCustomerContact?: Resolver<
    Maybe<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType,
    Partial<QueryFindFirstCustomerContactArgs>
  >;
  findFirstCustomerContactOrThrow?: Resolver<
    Maybe<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType,
    Partial<QueryFindFirstCustomerContactOrThrowArgs>
  >;
  findFirstCustomerOrThrow?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    Partial<QueryFindFirstCustomerOrThrowArgs>
  >;
  findFirstUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<QueryFindFirstUserArgs>
  >;
  findFirstUserOrThrow?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<QueryFindFirstUserOrThrowArgs>
  >;
  getCustomer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCustomerArgs, 'where'>
  >;
  getCustomerContact?: Resolver<
    Maybe<ResolversTypes['CustomerContact']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCustomerContactArgs, 'where'>
  >;
  getUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserArgs, 'where'>
  >;
  groupByCustomer?: Resolver<
    ReadonlyArray<ResolversTypes['CustomerGroupBy']>,
    ParentType,
    ContextType,
    RequireFields<QueryGroupByCustomerArgs, 'by'>
  >;
  groupByCustomerContact?: Resolver<
    ReadonlyArray<ResolversTypes['CustomerContactGroupBy']>,
    ParentType,
    ContextType,
    RequireFields<QueryGroupByCustomerContactArgs, 'by'>
  >;
  groupByUser?: Resolver<
    ReadonlyArray<ResolversTypes['UserGroupBy']>,
    ParentType,
    ContextType,
    RequireFields<QueryGroupByUserArgs, 'by'>
  >;
  signin?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType,
    RequireFields<QuerySigninArgs, 'password' | 'username'>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'where'>
  >;
  users?: Resolver<
    ReadonlyArray<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<QueryUsersArgs>
  >;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate'],
> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dateCreated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserGroupByResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserGroupBy'] = ResolversParentTypes['UserGroupBy'],
> = ResolversObject<{
  _count?: Resolver<
    Maybe<ResolversTypes['UserCountAggregate']>,
    ParentType,
    ContextType
  >;
  _max?: Resolver<
    Maybe<ResolversTypes['UserMaxAggregate']>,
    ParentType,
    ContextType
  >;
  _min?: Resolver<
    Maybe<ResolversTypes['UserMinAggregate']>,
    ParentType,
    ContextType
  >;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateCreated?: Resolver<
    ResolversTypes['DateTimeISO'],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMaxAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate'],
> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMinAggregateResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate'],
> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dateCreated?: Resolver<
    Maybe<ResolversTypes['DateTimeISO']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AffectedRowsOutput?: AffectedRowsOutputResolvers<ContextType>;
  AggregateCustomer?: AggregateCustomerResolvers<ContextType>;
  AggregateCustomerContact?: AggregateCustomerContactResolvers<ContextType>;
  AggregateUser?: AggregateUserResolvers<ContextType>;
  CreateManyAndReturnCustomer?: CreateManyAndReturnCustomerResolvers<ContextType>;
  CreateManyAndReturnCustomerContact?: CreateManyAndReturnCustomerContactResolvers<ContextType>;
  CreateManyAndReturnUser?: CreateManyAndReturnUserResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomerContact?: CustomerContactResolvers<ContextType>;
  CustomerContactCountAggregate?: CustomerContactCountAggregateResolvers<ContextType>;
  CustomerContactGroupBy?: CustomerContactGroupByResolvers<ContextType>;
  CustomerContactMaxAggregate?: CustomerContactMaxAggregateResolvers<ContextType>;
  CustomerContactMinAggregate?: CustomerContactMinAggregateResolvers<ContextType>;
  CustomerCount?: CustomerCountResolvers<ContextType>;
  CustomerCountAggregate?: CustomerCountAggregateResolvers<ContextType>;
  CustomerGroupBy?: CustomerGroupByResolvers<ContextType>;
  CustomerMaxAggregate?: CustomerMaxAggregateResolvers<ContextType>;
  CustomerMinAggregate?: CustomerMinAggregateResolvers<ContextType>;
  DateTimeISO?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserGroupBy?: UserGroupByResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
}>;

export const Signin = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'signin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'username' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'password' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'username' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'username' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'password' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SigninQuery, SigninQueryVariables>;
export const GetCustomerContacts = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCustomerContacts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'customerId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customerContact' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'customerId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'equals' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'customerId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'streetAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCustomerContactsQuery,
  GetCustomerContactsQueryVariables
>;
export const GetCustomers = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCustomers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'streetAddress' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
                { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCustomersQuery, GetCustomersQueryVariables>;
