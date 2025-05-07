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
  readonly search?: Maybe<ReadonlyArray<SearchResult>>;
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

export interface QuerySearchArgs {
  query: Scalars['String']['input'];
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

export interface SearchResult {
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly type?: Maybe<Scalars['Float']['output']>;
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

export type GetSearchResultsQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;

export type GetSearchResultsQuery = {
  readonly search?:
    | ReadonlyArray<{
        readonly id?: string | undefined;
        readonly name?: string | undefined;
        readonly description?: string | undefined;
        readonly type?: number | undefined;
      }>
    | undefined;
};

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
export const GetSearchResults = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSearchResults' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'query' },
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
            name: { kind: 'Name', value: 'search' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'query' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSearchResultsQuery,
  GetSearchResultsQueryVariables
>;
