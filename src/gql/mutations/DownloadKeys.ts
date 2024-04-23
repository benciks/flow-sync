import type * as Types from '../../../gql/schema';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type DownloadKeysMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type DownloadKeysMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'downloadTaskKeys'>
);


export const DownloadKeysDocument = gql`
    mutation DownloadKeys {
  downloadTaskKeys
}
    `;

export function useDownloadKeysMutation() {
  return Urql.useMutation<DownloadKeysMutation, DownloadKeysMutationVariables>(DownloadKeysDocument);
};