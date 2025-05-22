import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export interface AggregateState {
  readonly _count?: Maybe<StateCountAggregate>;
  readonly _max?: Maybe<StateMaxAggregate>;
  readonly _min?: Maybe<StateMinAggregate>;
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
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
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
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
}

export interface CreateManyAndReturnState {
  readonly code: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
}

export interface CreateManyAndReturnUser {
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
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
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
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
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
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
  readonly stateId: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly streetAddress2: Scalars['Int']['output'];
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
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
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
  readonly state: StateCreateNestedOneWithoutCustomerContactInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
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
  readonly stateId: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
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
  readonly stateId: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface CustomerContactCreateManyStateInput {
  readonly city: Scalars['String']['input'];
  readonly customerId: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface CustomerContactCreateManyStateInputEnvelope {
  readonly data: ReadonlyArray<CustomerContactCreateManyStateInput>;
}

export interface CustomerContactCreateNestedManyWithoutCustomerInput {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<CustomerContactCreateWithoutCustomerInput>>;
  readonly createMany?: InputMaybe<CustomerContactCreateManyCustomerInputEnvelope>;
}

export interface CustomerContactCreateNestedManyWithoutStateInput {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutStateInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<CustomerContactCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<CustomerContactCreateManyStateInputEnvelope>;
}

export interface CustomerContactCreateOrConnectWithoutCustomerInput {
  readonly create: CustomerContactCreateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
}

export interface CustomerContactCreateOrConnectWithoutStateInput {
  readonly create: CustomerContactCreateWithoutStateInput;
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
  readonly state: StateCreateNestedOneWithoutCustomerContactInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface CustomerContactCreateWithoutStateInput {
  readonly city: Scalars['String']['input'];
  readonly customer: CustomerCreateNestedOneWithoutCustomerContactInput;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
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
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
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
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
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
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
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
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
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
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
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
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
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
  readonly state?: InputMaybe<StateOrderByWithRelationInput>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
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
  StateId = 9,
  StreetAddress = 10,
  StreetAddress2 = 11,
  Zip = 12,
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
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface CustomerContactScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereWithAggregatesInput>>;
  readonly city?: InputMaybe<StringWithAggregatesFilter>;
  readonly customerId?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly email?: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly stateId?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableWithAggregatesFilter>;
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
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerContactNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
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
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerContactUpdateManyWithWhereWithoutCustomerInput {
  readonly data: CustomerContactUpdateManyMutationInput;
  readonly where: CustomerContactScalarWhereInput;
}

export interface CustomerContactUpdateManyWithWhereWithoutStateInput {
  readonly data: CustomerContactUpdateManyMutationInput;
  readonly where: CustomerContactScalarWhereInput;
}

export interface CustomerContactUpdateManyWithoutCustomerNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<CustomerContactCreateWithoutCustomerInput>>;
  readonly createMany?: InputMaybe<CustomerContactCreateManyCustomerInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
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

export interface CustomerContactUpdateManyWithoutStateNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<CustomerContactCreateOrConnectWithoutStateInput>
  >;
  readonly create?: InputMaybe<ReadonlyArray<CustomerContactCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<CustomerContactCreateManyStateInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<CustomerContactScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<CustomerContactWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<CustomerContactUpdateWithWhereUniqueWithoutStateInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<CustomerContactUpdateManyWithWhereWithoutStateInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<CustomerContactUpsertWithWhereUniqueWithoutStateInput>
  >;
}

export interface CustomerContactUpdateWithWhereUniqueWithoutCustomerInput {
  readonly data: CustomerContactUpdateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
}

export interface CustomerContactUpdateWithWhereUniqueWithoutStateInput {
  readonly data: CustomerContactUpdateWithoutStateInput;
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
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerContactNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerContactUpdateWithoutStateInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateOneRequiredWithoutCustomerContactNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerContactUpsertWithWhereUniqueWithoutCustomerInput {
  readonly create: CustomerContactCreateWithoutCustomerInput;
  readonly update: CustomerContactUpdateWithoutCustomerInput;
  readonly where: CustomerContactWhereUniqueInput;
}

export interface CustomerContactUpsertWithWhereUniqueWithoutStateInput {
  readonly create: CustomerContactCreateWithoutStateInput;
  readonly update: CustomerContactUpdateWithoutStateInput;
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
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
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
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
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
  readonly stateId: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly streetAddress2: Scalars['Int']['output'];
  readonly zip: Scalars['Int']['output'];
}

export interface CustomerCountOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
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
  readonly state: StateCreateNestedOneWithoutCustomerInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface CustomerCreateManyInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly stateId: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface CustomerCreateManyStateInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface CustomerCreateManyStateInputEnvelope {
  readonly data: ReadonlyArray<CustomerCreateManyStateInput>;
}

export interface CustomerCreateNestedManyWithoutStateInput {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<CustomerCreateOrConnectWithoutStateInput>>;
  readonly create?: InputMaybe<ReadonlyArray<CustomerCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<CustomerCreateManyStateInputEnvelope>;
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

export interface CustomerCreateOrConnectWithoutStateInput {
  readonly create: CustomerCreateWithoutStateInput;
  readonly where: CustomerWhereUniqueInput;
}

export interface CustomerCreateWithoutCustomerContactInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly state: StateCreateNestedOneWithoutCustomerInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface CustomerCreateWithoutStateInput {
  readonly CustomerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutCustomerInput>;
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
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
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
}

export interface CustomerListRelationFilter {
  readonly every?: InputMaybe<CustomerWhereInput>;
  readonly none?: InputMaybe<CustomerWhereInput>;
  readonly some?: InputMaybe<CustomerWhereInput>;
}

export interface CustomerMaxAggregate {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
}

export interface CustomerMaxOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerMinAggregate {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly dateUpdated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
}

export interface CustomerMinOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
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
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
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
  readonly state?: InputMaybe<StateOrderByWithRelationInput>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
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
  StateId = 6,
  StreetAddress = 7,
  StreetAddress2 = 8,
  Zip = 9,
}

export interface CustomerScalarWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface CustomerScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerScalarWhereWithAggregatesInput>>;
  readonly city?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly stateId?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableWithAggregatesFilter>;
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
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerUpdateManyMutationInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerUpdateManyWithWhereWithoutStateInput {
  readonly data: CustomerUpdateManyMutationInput;
  readonly where: CustomerScalarWhereInput;
}

export interface CustomerUpdateManyWithoutStateNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<CustomerCreateOrConnectWithoutStateInput>>;
  readonly create?: InputMaybe<ReadonlyArray<CustomerCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<CustomerCreateManyStateInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<CustomerScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<CustomerWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<CustomerUpdateWithWhereUniqueWithoutStateInput>>;
  readonly updateMany?: InputMaybe<ReadonlyArray<CustomerUpdateManyWithWhereWithoutStateInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<CustomerUpsertWithWhereUniqueWithoutStateInput>>;
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

export interface CustomerUpdateWithWhereUniqueWithoutStateInput {
  readonly data: CustomerUpdateWithoutStateInput;
  readonly where: CustomerWhereUniqueInput;
}

export interface CustomerUpdateWithoutCustomerContactInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutCustomerNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerUpdateWithoutStateInput {
  readonly CustomerContact?: InputMaybe<CustomerContactUpdateManyWithoutCustomerNestedInput>;
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly dateUpdated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerUpsertWithWhereUniqueWithoutStateInput {
  readonly create: CustomerCreateWithoutStateInput;
  readonly update: CustomerUpdateWithoutStateInput;
  readonly where: CustomerWhereUniqueInput;
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
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
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
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
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
  readonly createManyAndReturnState: ReadonlyArray<CreateManyAndReturnState>;
  readonly createManyAndReturnUser: ReadonlyArray<CreateManyAndReturnUser>;
  readonly createManyCustomer: AffectedRowsOutput;
  readonly createManyCustomerContact: AffectedRowsOutput;
  readonly createManyState: AffectedRowsOutput;
  readonly createManyUser: AffectedRowsOutput;
  readonly createOneCustomer: Customer;
  readonly createOneCustomerContact: CustomerContact;
  readonly createOneState: State;
  readonly createOneUser: User;
  readonly deleteManyCustomer: AffectedRowsOutput;
  readonly deleteManyCustomerContact: AffectedRowsOutput;
  readonly deleteManyState: AffectedRowsOutput;
  readonly deleteManyUser: AffectedRowsOutput;
  readonly deleteOneCustomer?: Maybe<Customer>;
  readonly deleteOneCustomerContact?: Maybe<CustomerContact>;
  readonly deleteOneState?: Maybe<State>;
  readonly deleteOneUser?: Maybe<User>;
  readonly updateManyCustomer: AffectedRowsOutput;
  readonly updateManyCustomerContact: AffectedRowsOutput;
  readonly updateManyState: AffectedRowsOutput;
  readonly updateManyUser: AffectedRowsOutput;
  readonly updateOneCustomer?: Maybe<Customer>;
  readonly updateOneCustomerContact?: Maybe<CustomerContact>;
  readonly updateOneState?: Maybe<State>;
  readonly updateOneUser?: Maybe<User>;
  readonly upsertOneCustomer: Customer;
  readonly upsertOneCustomerContact: CustomerContact;
  readonly upsertOneState: State;
  readonly upsertOneUser: User;
}

export interface MutationCreateManyAndReturnCustomerArgs {
  data: ReadonlyArray<CustomerCreateManyInput>;
}

export interface MutationCreateManyAndReturnCustomerContactArgs {
  data: ReadonlyArray<CustomerContactCreateManyInput>;
}

export interface MutationCreateManyAndReturnStateArgs {
  data: ReadonlyArray<StateCreateManyInput>;
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

export interface MutationCreateManyStateArgs {
  data: ReadonlyArray<StateCreateManyInput>;
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

export interface MutationCreateOneStateArgs {
  data: StateCreateInput;
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

export interface MutationDeleteManyStateArgs {
  where?: InputMaybe<StateWhereInput>;
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

export interface MutationDeleteOneStateArgs {
  where: StateWhereUniqueInput;
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

export interface MutationUpdateManyStateArgs {
  data: StateUpdateManyMutationInput;
  where?: InputMaybe<StateWhereInput>;
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

export interface MutationUpdateOneStateArgs {
  data: StateUpdateInput;
  where: StateWhereUniqueInput;
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

export interface MutationUpsertOneStateArgs {
  create: StateCreateInput;
  update: StateUpdateInput;
  where: StateWhereUniqueInput;
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

export interface NestedIntNullableFilter {
  readonly equals?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Int']['input']>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<NestedIntNullableFilter>;
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

export interface NestedStringNullableFilter {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface NestedStringNullableWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntNullableFilter>;
  readonly _max?: InputMaybe<NestedStringNullableFilter>;
  readonly _min?: InputMaybe<NestedStringNullableFilter>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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

export enum NullsOrder {
  First = 0,
  Last = 1,
}

export interface Query {
  readonly aggregateCustomer: AggregateCustomer;
  readonly aggregateCustomerContact: AggregateCustomerContact;
  readonly aggregateState: AggregateState;
  readonly aggregateUser: AggregateUser;
  readonly customer?: Maybe<Customer>;
  readonly customerContact?: Maybe<CustomerContact>;
  readonly customerContacts: ReadonlyArray<CustomerContact>;
  readonly customers: ReadonlyArray<Customer>;
  readonly findFirstCustomer?: Maybe<Customer>;
  readonly findFirstCustomerContact?: Maybe<CustomerContact>;
  readonly findFirstCustomerContactOrThrow?: Maybe<CustomerContact>;
  readonly findFirstCustomerOrThrow?: Maybe<Customer>;
  readonly findFirstState?: Maybe<State>;
  readonly findFirstStateOrThrow?: Maybe<State>;
  readonly findFirstUser?: Maybe<User>;
  readonly findFirstUserOrThrow?: Maybe<User>;
  readonly getCustomer?: Maybe<Customer>;
  readonly getCustomerContact?: Maybe<CustomerContact>;
  readonly getState?: Maybe<State>;
  readonly getUser?: Maybe<User>;
  readonly groupByCustomer: ReadonlyArray<CustomerGroupBy>;
  readonly groupByCustomerContact: ReadonlyArray<CustomerContactGroupBy>;
  readonly groupByState: ReadonlyArray<StateGroupBy>;
  readonly groupByUser: ReadonlyArray<UserGroupBy>;
  readonly search?: Maybe<ReadonlyArray<SearchResult>>;
  readonly signin?: Maybe<Scalars['String']['output']>;
  readonly state?: Maybe<State>;
  readonly states: ReadonlyArray<State>;
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

export interface QueryAggregateStateArgs {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
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

export interface QueryFindFirstStateArgs {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<StateScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
}

export interface QueryFindFirstStateOrThrowArgs {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<StateScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
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

export interface QueryGetStateArgs {
  where: StateWhereUniqueInput;
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
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface QueryGroupByStateArgs {
  by: ReadonlyArray<StateScalarFieldEnum>;
  having?: InputMaybe<StateScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
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

export interface QueryStateArgs {
  where: StateWhereUniqueInput;
}

export interface QueryStatesArgs {
  cursor?: InputMaybe<StateWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<StateScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<StateOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StateWhereInput>;
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

export interface SortOrderInput {
  readonly nulls?: InputMaybe<NullsOrder>;
  readonly sort: SortOrder;
}

export interface State {
  readonly _count?: Maybe<StateCount>;
  readonly code: Scalars['String']['output'];
  readonly customer: ReadonlyArray<Customer>;
  readonly customerContact: ReadonlyArray<CustomerContact>;
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly user: ReadonlyArray<User>;
}

export interface StateCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface StateCustomerContactArgs {
  cursor?: InputMaybe<CustomerContactWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerContactScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerContactOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface StateUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
}

export interface StateCount {
  readonly customer: Scalars['Int']['output'];
  readonly customerContact: Scalars['Int']['output'];
  readonly user: Scalars['Int']['output'];
}

export interface StateCountCustomerArgs {
  where?: InputMaybe<CustomerWhereInput>;
}

export interface StateCountCustomerContactArgs {
  where?: InputMaybe<CustomerContactWhereInput>;
}

export interface StateCountUserArgs {
  where?: InputMaybe<UserWhereInput>;
}

export interface StateCountAggregate {
  readonly _all: Scalars['Int']['output'];
  readonly code: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly name: Scalars['Int']['output'];
}

export interface StateCountOrderByAggregateInput {
  readonly code?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface StateCreateInput {
  readonly code: Scalars['String']['input'];
  readonly customer?: InputMaybe<CustomerCreateNestedManyWithoutStateInput>;
  readonly customerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutStateInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly user?: InputMaybe<UserCreateNestedManyWithoutStateInput>;
}

export interface StateCreateManyInput {
  readonly code: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
}

export interface StateCreateNestedOneWithoutCustomerContactInput {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCustomerContactInput>;
  readonly create?: InputMaybe<StateCreateWithoutCustomerContactInput>;
}

export interface StateCreateNestedOneWithoutCustomerInput {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCustomerInput>;
  readonly create?: InputMaybe<StateCreateWithoutCustomerInput>;
}

export interface StateCreateNestedOneWithoutUserInput {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutUserInput>;
  readonly create?: InputMaybe<StateCreateWithoutUserInput>;
}

export interface StateCreateOrConnectWithoutCustomerContactInput {
  readonly create: StateCreateWithoutCustomerContactInput;
  readonly where: StateWhereUniqueInput;
}

export interface StateCreateOrConnectWithoutCustomerInput {
  readonly create: StateCreateWithoutCustomerInput;
  readonly where: StateWhereUniqueInput;
}

export interface StateCreateOrConnectWithoutUserInput {
  readonly create: StateCreateWithoutUserInput;
  readonly where: StateWhereUniqueInput;
}

export interface StateCreateWithoutCustomerContactInput {
  readonly code: Scalars['String']['input'];
  readonly customer?: InputMaybe<CustomerCreateNestedManyWithoutStateInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly user?: InputMaybe<UserCreateNestedManyWithoutStateInput>;
}

export interface StateCreateWithoutCustomerInput {
  readonly code: Scalars['String']['input'];
  readonly customerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutStateInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
  readonly user?: InputMaybe<UserCreateNestedManyWithoutStateInput>;
}

export interface StateCreateWithoutUserInput {
  readonly code: Scalars['String']['input'];
  readonly customer?: InputMaybe<CustomerCreateNestedManyWithoutStateInput>;
  readonly customerContact?: InputMaybe<CustomerContactCreateNestedManyWithoutStateInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name: Scalars['String']['input'];
}

export interface StateGroupBy {
  readonly _count?: Maybe<StateCountAggregate>;
  readonly _max?: Maybe<StateMaxAggregate>;
  readonly _min?: Maybe<StateMinAggregate>;
  readonly code: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
}

export interface StateMaxAggregate {
  readonly code?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
}

export interface StateMaxOrderByAggregateInput {
  readonly code?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface StateMinAggregate {
  readonly code?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
}

export interface StateMinOrderByAggregateInput {
  readonly code?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface StateOrderByWithAggregationInput {
  readonly _count?: InputMaybe<StateCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<StateMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<StateMinOrderByAggregateInput>;
  readonly code?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface StateOrderByWithRelationInput {
  readonly code?: InputMaybe<SortOrder>;
  readonly customer?: InputMaybe<CustomerOrderByRelationAggregateInput>;
  readonly customerContact?: InputMaybe<CustomerContactOrderByRelationAggregateInput>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly user?: InputMaybe<UserOrderByRelationAggregateInput>;
}

export interface StateRelationFilter {
  readonly is?: InputMaybe<StateWhereInput>;
  readonly isNot?: InputMaybe<StateWhereInput>;
}

export enum StateScalarFieldEnum {
  Code = 0,
  Id = 1,
  Name = 2,
}

export interface StateScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<ReadonlyArray<StateScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<StateScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<StateScalarWhereWithAggregatesInput>>;
  readonly code?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
}

export interface StateUpdateInput {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateManyWithoutStateNestedInput>;
  readonly customerContact?: InputMaybe<CustomerContactUpdateManyWithoutStateNestedInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<UserUpdateManyWithoutStateNestedInput>;
}

export interface StateUpdateManyMutationInput {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
}

export interface StateUpdateOneRequiredWithoutCustomerContactNestedInput {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCustomerContactInput>;
  readonly create?: InputMaybe<StateCreateWithoutCustomerContactInput>;
  readonly update?: InputMaybe<StateUpdateToOneWithWhereWithoutCustomerContactInput>;
  readonly upsert?: InputMaybe<StateUpsertWithoutCustomerContactInput>;
}

export interface StateUpdateOneRequiredWithoutCustomerNestedInput {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutCustomerInput>;
  readonly create?: InputMaybe<StateCreateWithoutCustomerInput>;
  readonly update?: InputMaybe<StateUpdateToOneWithWhereWithoutCustomerInput>;
  readonly upsert?: InputMaybe<StateUpsertWithoutCustomerInput>;
}

export interface StateUpdateOneRequiredWithoutUserNestedInput {
  readonly connect?: InputMaybe<StateWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<StateCreateOrConnectWithoutUserInput>;
  readonly create?: InputMaybe<StateCreateWithoutUserInput>;
  readonly update?: InputMaybe<StateUpdateToOneWithWhereWithoutUserInput>;
  readonly upsert?: InputMaybe<StateUpsertWithoutUserInput>;
}

export interface StateUpdateToOneWithWhereWithoutCustomerContactInput {
  readonly data: StateUpdateWithoutCustomerContactInput;
  readonly where?: InputMaybe<StateWhereInput>;
}

export interface StateUpdateToOneWithWhereWithoutCustomerInput {
  readonly data: StateUpdateWithoutCustomerInput;
  readonly where?: InputMaybe<StateWhereInput>;
}

export interface StateUpdateToOneWithWhereWithoutUserInput {
  readonly data: StateUpdateWithoutUserInput;
  readonly where?: InputMaybe<StateWhereInput>;
}

export interface StateUpdateWithoutCustomerContactInput {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateManyWithoutStateNestedInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<UserUpdateManyWithoutStateNestedInput>;
}

export interface StateUpdateWithoutCustomerInput {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly customerContact?: InputMaybe<CustomerContactUpdateManyWithoutStateNestedInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly user?: InputMaybe<UserUpdateManyWithoutStateNestedInput>;
}

export interface StateUpdateWithoutUserInput {
  readonly code?: InputMaybe<Scalars['String']['input']>;
  readonly customer?: InputMaybe<CustomerUpdateManyWithoutStateNestedInput>;
  readonly customerContact?: InputMaybe<CustomerContactUpdateManyWithoutStateNestedInput>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
}

export interface StateUpsertWithoutCustomerContactInput {
  readonly create: StateCreateWithoutCustomerContactInput;
  readonly update: StateUpdateWithoutCustomerContactInput;
  readonly where?: InputMaybe<StateWhereInput>;
}

export interface StateUpsertWithoutCustomerInput {
  readonly create: StateCreateWithoutCustomerInput;
  readonly update: StateUpdateWithoutCustomerInput;
  readonly where?: InputMaybe<StateWhereInput>;
}

export interface StateUpsertWithoutUserInput {
  readonly create: StateCreateWithoutUserInput;
  readonly update: StateUpdateWithoutUserInput;
  readonly where?: InputMaybe<StateWhereInput>;
}

export interface StateWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly code?: InputMaybe<StringFilter>;
  readonly customer?: InputMaybe<CustomerListRelationFilter>;
  readonly customerContact?: InputMaybe<CustomerContactListRelationFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly user?: InputMaybe<UserListRelationFilter>;
}

export interface StateWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<StateWhereInput>>;
  readonly code?: InputMaybe<StringFilter>;
  readonly customer?: InputMaybe<CustomerListRelationFilter>;
  readonly customerContact?: InputMaybe<CustomerContactListRelationFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<StringFilter>;
  readonly user?: InputMaybe<UserListRelationFilter>;
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

export interface StringNullableFilter {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
}

export interface StringNullableWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntNullableFilter>;
  readonly _max?: InputMaybe<NestedStringNullableFilter>;
  readonly _min?: InputMaybe<NestedStringNullableFilter>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
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
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
  readonly state: State;
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
}

export interface UserCountAggregate {
  readonly _all: Scalars['Int']['output'];
  readonly city: Scalars['Int']['output'];
  readonly dateCreated: Scalars['Int']['output'];
  readonly email: Scalars['Int']['output'];
  readonly firstName: Scalars['Int']['output'];
  readonly id: Scalars['Int']['output'];
  readonly lastName: Scalars['Int']['output'];
  readonly password: Scalars['Int']['output'];
  readonly phone: Scalars['Int']['output'];
  readonly role: Scalars['Int']['output'];
  readonly stateId: Scalars['Int']['output'];
  readonly streetAddress: Scalars['Int']['output'];
  readonly streetAddress2: Scalars['Int']['output'];
  readonly zip: Scalars['Int']['output'];
}

export interface UserCountOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface UserCreateInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
  readonly state: StateCreateNestedOneWithoutUserInput;
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface UserCreateManyInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
  readonly stateId: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface UserCreateManyStateInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface UserCreateManyStateInputEnvelope {
  readonly data: ReadonlyArray<UserCreateManyStateInput>;
}

export interface UserCreateNestedManyWithoutStateInput {
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<UserCreateOrConnectWithoutStateInput>>;
  readonly create?: InputMaybe<ReadonlyArray<UserCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<UserCreateManyStateInputEnvelope>;
}

export interface UserCreateOrConnectWithoutStateInput {
  readonly create: UserCreateWithoutStateInput;
  readonly where: UserWhereUniqueInput;
}

export interface UserCreateWithoutStateInput {
  readonly city: Scalars['String']['input'];
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email: Scalars['String']['input'];
  readonly firstName: Scalars['String']['input'];
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly role: Scalars['String']['input'];
  readonly streetAddress: Scalars['String']['input'];
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip: Scalars['String']['input'];
}

export interface UserGroupBy {
  readonly _count?: Maybe<UserCountAggregate>;
  readonly _max?: Maybe<UserMaxAggregate>;
  readonly _min?: Maybe<UserMinAggregate>;
  readonly city: Scalars['String']['output'];
  readonly dateCreated: Scalars['DateTimeISO']['output'];
  readonly email: Scalars['String']['output'];
  readonly firstName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly lastName: Scalars['String']['output'];
  readonly password: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly role: Scalars['String']['output'];
  readonly stateId: Scalars['String']['output'];
  readonly streetAddress: Scalars['String']['output'];
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip: Scalars['String']['output'];
}

export interface UserListRelationFilter {
  readonly every?: InputMaybe<UserWhereInput>;
  readonly none?: InputMaybe<UserWhereInput>;
  readonly some?: InputMaybe<UserWhereInput>;
}

export interface UserMaxAggregate {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly password?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly role?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
}

export interface UserMaxOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface UserMinAggregate {
  readonly city?: Maybe<Scalars['String']['output']>;
  readonly dateCreated?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly firstName?: Maybe<Scalars['String']['output']>;
  readonly id?: Maybe<Scalars['String']['output']>;
  readonly lastName?: Maybe<Scalars['String']['output']>;
  readonly password?: Maybe<Scalars['String']['output']>;
  readonly phone?: Maybe<Scalars['String']['output']>;
  readonly role?: Maybe<Scalars['String']['output']>;
  readonly stateId?: Maybe<Scalars['String']['output']>;
  readonly streetAddress?: Maybe<Scalars['String']['output']>;
  readonly streetAddress2?: Maybe<Scalars['String']['output']>;
  readonly zip?: Maybe<Scalars['String']['output']>;
}

export interface UserMinOrderByAggregateInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrder>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface UserOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithAggregationInput {
  readonly _count?: InputMaybe<UserCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<UserMinOrderByAggregateInput>;
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
  readonly zip?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithRelationInput {
  readonly city?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
  readonly state?: InputMaybe<StateOrderByWithRelationInput>;
  readonly stateId?: InputMaybe<SortOrder>;
  readonly streetAddress?: InputMaybe<SortOrder>;
  readonly streetAddress2?: InputMaybe<SortOrderInput>;
  readonly zip?: InputMaybe<SortOrder>;
}

export enum UserScalarFieldEnum {
  City = 0,
  DateCreated = 1,
  Email = 2,
  FirstName = 3,
  Id = 4,
  LastName = 5,
  Password = 6,
  Phone = 7,
  Role = 8,
  StateId = 9,
  StreetAddress = 10,
  StreetAddress2 = 11,
  Zip = 12,
}

export interface UserScalarWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly role?: InputMaybe<StringFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface UserScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly city?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly email?: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName?: InputMaybe<StringWithAggregatesFilter>;
  readonly password?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly role?: InputMaybe<StringWithAggregatesFilter>;
  readonly stateId?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress?: InputMaybe<StringWithAggregatesFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableWithAggregatesFilter>;
  readonly zip?: InputMaybe<StringWithAggregatesFilter>;
}

export interface UserUpdateInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly state?: InputMaybe<StateUpdateOneRequiredWithoutUserNestedInput>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface UserUpdateManyMutationInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface UserUpdateManyWithWhereWithoutStateInput {
  readonly data: UserUpdateManyMutationInput;
  readonly where: UserScalarWhereInput;
}

export interface UserUpdateManyWithoutStateNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<ReadonlyArray<UserCreateOrConnectWithoutStateInput>>;
  readonly create?: InputMaybe<ReadonlyArray<UserCreateWithoutStateInput>>;
  readonly createMany?: InputMaybe<UserCreateManyStateInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly update?: InputMaybe<ReadonlyArray<UserUpdateWithWhereUniqueWithoutStateInput>>;
  readonly updateMany?: InputMaybe<ReadonlyArray<UserUpdateManyWithWhereWithoutStateInput>>;
  readonly upsert?: InputMaybe<ReadonlyArray<UserUpsertWithWhereUniqueWithoutStateInput>>;
}

export interface UserUpdateWithWhereUniqueWithoutStateInput {
  readonly data: UserUpdateWithoutStateInput;
  readonly where: UserWhereUniqueInput;
}

export interface UserUpdateWithoutStateInput {
  readonly city?: InputMaybe<Scalars['String']['input']>;
  readonly dateCreated?: InputMaybe<Scalars['DateTimeISO']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly phone?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress?: InputMaybe<Scalars['String']['input']>;
  readonly streetAddress2?: InputMaybe<Scalars['String']['input']>;
  readonly zip?: InputMaybe<Scalars['String']['input']>;
}

export interface UserUpsertWithWhereUniqueWithoutStateInput {
  readonly create: UserCreateWithoutStateInput;
  readonly update: UserUpdateWithoutStateInput;
  readonly where: UserWhereUniqueInput;
}

export interface UserWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly role?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
}

export interface UserWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly city?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars['String']['input']>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly role?: InputMaybe<StringFilter>;
  readonly state?: InputMaybe<StateRelationFilter>;
  readonly stateId?: InputMaybe<StringFilter>;
  readonly streetAddress?: InputMaybe<StringFilter>;
  readonly streetAddress2?: InputMaybe<StringNullableFilter>;
  readonly zip?: InputMaybe<StringFilter>;
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
        readonly stateId: string;
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
    readonly stateId: string;
    readonly zip: string;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
    readonly state: { readonly name: string };
  }>;
};

export type GetCustomerByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;

export type GetCustomerByIdQuery = {
  readonly customer?:
    | {
        readonly id: string;
        readonly name: string;
        readonly phone: string;
        readonly streetAddress: string;
        readonly city: string;
        readonly stateId: string;
        readonly zip: string;
        readonly dateCreated: unknown;
        readonly dateUpdated: unknown;
        readonly state: { readonly name: string };
      }
    | undefined;
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

export type CustomerPartsFragment = {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly streetAddress: string;
  readonly city: string;
  readonly stateId: string;
  readonly zip: string;
  readonly dateCreated: unknown;
  readonly dateUpdated: unknown;
  readonly state: { readonly name: string };
};

export const CustomerPartsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CustomerPartsFragment, unknown>;
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
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
                value: { kind: 'Variable', name: { kind: 'Name', value: 'username' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'password' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'password' } },
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'customerId' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
                { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
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
} as unknown as DocumentNode<GetCustomerContactsQuery, GetCustomerContactsQueryVariables>;
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
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetCustomerById = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCustomerById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerParts' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerParts' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streetAddress' } },
          { kind: 'Field', name: { kind: 'Name', value: 'city' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stateId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'state' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'name' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateUpdated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCustomerByIdQuery, GetCustomerByIdQueryVariables>;
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
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
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
                value: { kind: 'Variable', name: { kind: 'Name', value: 'query' } },
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
} as unknown as DocumentNode<GetSearchResultsQuery, GetSearchResultsQueryVariables>;
