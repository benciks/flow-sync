import type * as Types from '../../../gql/schema';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type UploadKeyMutationVariables = Types.Exact<{
  key: Types.Scalars['String']['input'];
}>;


export type UploadKeyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'uploadTimeWarriorKey'>
);


export const UploadKeyDocument = gql`
    mutation uploadKey($key: String!) {
  uploadTimeWarriorKey(key: $key)
}
    `;

export function useUploadKeyMutation() {
  return Urql.useMutation<UploadKeyMutation, UploadKeyMutationVariables>(UploadKeyDocument);
};