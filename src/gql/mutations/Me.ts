import type * as Types from '../../../gql/schema';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type MeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'username' | 'timewId' | 'taskdUuid'>
  ) }
);


export const MeDocument = gql`
    query me {
  me {
    id
    username
    timewId
    taskdUuid
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<never, MeQueryVariables>, 'query'>) {
  return Urql.useQuery<MeQuery, MeQueryVariables>({ query: MeDocument, ...options });
};