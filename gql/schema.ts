import { cacheExchange } from '@urql/exchange-graphcache';
import type { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver } from '@urql/exchange-graphcache';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  File: { input: never; output: never; }
  Time: { input: never; output: never; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  deleteTask: Task;
  deleteTimeRecord: TimeRecord;
  downloadTaskKeys: Scalars['String']['output'];
  editTask: Task;
  markTaskDone: Task;
  modifyTimeRecordDate: TimeRecord;
  setTimewHook: Scalars['Boolean']['output'];
  signIn: SignInPayload;
  signOut: Scalars['Boolean']['output'];
  signUp: SignInPayload;
  startTask: Task;
  stopTask: Task;
  tagTimeRecord: TimeRecord;
  timeStart: TimeRecord;
  timeStop: TimeRecord;
  untagTimeRecord: TimeRecord;
  uploadTimeWarriorKey: Scalars['Boolean']['output'];
};


export type MutationCreateTaskArgs = {
  description: Scalars['String']['input'];
  due?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTimeRecordArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEditTaskArgs = {
  depends?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  due?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Scalars['String']['input']>;
  recurring?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  until?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMarkTaskDoneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationModifyTimeRecordDateArgs = {
  end?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  start?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSetTimewHookArgs = {
  enabled: Scalars['Boolean']['input'];
};


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationStartTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStopTaskArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTagTimeRecordArgs = {
  id: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
};


export type MutationUntagTimeRecordArgs = {
  id: Scalars['ID']['input'];
  tag: Scalars['String']['input'];
};


export type MutationUploadTimeWarriorKeyArgs = {
  key: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
  recentTaskProjects: Array<Scalars['String']['output']>;
  recentTaskTags: Array<Scalars['String']['output']>;
  tasks: Array<Task>;
  timeRecords: Array<TimeRecord>;
  timeTags: Array<Scalars['String']['output']>;
};


export type QueryTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
};

export type SignInPayload = {
  __typename?: 'SignInPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type Task = {
  __typename?: 'Task';
  depends: Array<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  due: Scalars['String']['output'];
  entry: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  modified: Scalars['String']['output'];
  parent?: Maybe<Scalars['String']['output']>;
  priority: Scalars['String']['output'];
  project: Scalars['String']['output'];
  recur?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
  until?: Maybe<Scalars['String']['output']>;
  urgency: Scalars['Float']['output'];
  uuid: Scalars['String']['output'];
};

export type TaskFilter = {
  description?: InputMaybe<Scalars['String']['input']>;
  due?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type TimeRecord = {
  __typename?: 'TimeRecord';
  end: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  start: Scalars['String']['output'];
  tags: Array<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  taskdUuid: Scalars['String']['output'];
  timewHook: Scalars['Boolean']['output'];
  timewId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  SignInPayload?: (data: WithTypename<SignInPayload>) => null | string,
  Task?: (data: WithTypename<Task>) => null | string,
  TimeRecord?: (data: WithTypename<TimeRecord>) => null | string,
  User?: (data: WithTypename<User>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    me?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<User> | string>,
    recentTaskProjects?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<Scalars['String'] | string>>,
    recentTaskTags?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<Scalars['String'] | string>>,
    tasks?: GraphCacheResolver<WithTypename<Query>, QueryTasksArgs, Array<WithTypename<Task> | string>>,
    timeRecords?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<WithTypename<TimeRecord> | string>>,
    timeTags?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Array<Scalars['String'] | string>>
  },
  SignInPayload?: {
    token?: GraphCacheResolver<WithTypename<SignInPayload>, Record<string, never>, Scalars['String'] | string>,
    user?: GraphCacheResolver<WithTypename<SignInPayload>, Record<string, never>, WithTypename<User> | string>
  },
  Task?: {
    depends?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Array<Scalars['String'] | string>>,
    description?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    due?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    entry?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['ID'] | string>,
    modified?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    parent?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    priority?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    project?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    recur?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    start?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    status?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    tags?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Array<Scalars['String'] | string>>,
    until?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>,
    urgency?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['Float'] | string>,
    uuid?: GraphCacheResolver<WithTypename<Task>, Record<string, never>, Scalars['String'] | string>
  },
  TimeRecord?: {
    end?: GraphCacheResolver<WithTypename<TimeRecord>, Record<string, never>, Scalars['String'] | string>,
    id?: GraphCacheResolver<WithTypename<TimeRecord>, Record<string, never>, Scalars['ID'] | string>,
    start?: GraphCacheResolver<WithTypename<TimeRecord>, Record<string, never>, Scalars['String'] | string>,
    tags?: GraphCacheResolver<WithTypename<TimeRecord>, Record<string, never>, Array<Scalars['String'] | string>>
  },
  User?: {
    id?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['ID'] | string>,
    password?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    taskdUuid?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    timewHook?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['Boolean'] | string>,
    timewId?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>,
    username?: GraphCacheResolver<WithTypename<User>, Record<string, never>, Scalars['String'] | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  createTask?: GraphCacheOptimisticMutationResolver<MutationCreateTaskArgs, WithTypename<Task>>,
  deleteTask?: GraphCacheOptimisticMutationResolver<MutationDeleteTaskArgs, WithTypename<Task>>,
  deleteTimeRecord?: GraphCacheOptimisticMutationResolver<MutationDeleteTimeRecordArgs, WithTypename<TimeRecord>>,
  downloadTaskKeys?: GraphCacheOptimisticMutationResolver<Record<string, never>, Scalars['String']>,
  editTask?: GraphCacheOptimisticMutationResolver<MutationEditTaskArgs, WithTypename<Task>>,
  markTaskDone?: GraphCacheOptimisticMutationResolver<MutationMarkTaskDoneArgs, WithTypename<Task>>,
  modifyTimeRecordDate?: GraphCacheOptimisticMutationResolver<MutationModifyTimeRecordDateArgs, WithTypename<TimeRecord>>,
  setTimewHook?: GraphCacheOptimisticMutationResolver<MutationSetTimewHookArgs, Scalars['Boolean']>,
  signIn?: GraphCacheOptimisticMutationResolver<MutationSignInArgs, WithTypename<SignInPayload>>,
  signOut?: GraphCacheOptimisticMutationResolver<Record<string, never>, Scalars['Boolean']>,
  signUp?: GraphCacheOptimisticMutationResolver<MutationSignUpArgs, WithTypename<SignInPayload>>,
  startTask?: GraphCacheOptimisticMutationResolver<MutationStartTaskArgs, WithTypename<Task>>,
  stopTask?: GraphCacheOptimisticMutationResolver<MutationStopTaskArgs, WithTypename<Task>>,
  tagTimeRecord?: GraphCacheOptimisticMutationResolver<MutationTagTimeRecordArgs, WithTypename<TimeRecord>>,
  timeStart?: GraphCacheOptimisticMutationResolver<Record<string, never>, WithTypename<TimeRecord>>,
  timeStop?: GraphCacheOptimisticMutationResolver<Record<string, never>, WithTypename<TimeRecord>>,
  untagTimeRecord?: GraphCacheOptimisticMutationResolver<MutationUntagTimeRecordArgs, WithTypename<TimeRecord>>,
  uploadTimeWarriorKey?: GraphCacheOptimisticMutationResolver<MutationUploadTimeWarriorKeyArgs, Scalars['Boolean']>
};

export type GraphCacheUpdaters = {
  Query?: {
    me?: GraphCacheUpdateResolver<{ me: WithTypename<User> }, Record<string, never>>,
    recentTaskProjects?: GraphCacheUpdateResolver<{ recentTaskProjects: Array<Scalars['String']> }, Record<string, never>>,
    recentTaskTags?: GraphCacheUpdateResolver<{ recentTaskTags: Array<Scalars['String']> }, Record<string, never>>,
    tasks?: GraphCacheUpdateResolver<{ tasks: Array<WithTypename<Task>> }, QueryTasksArgs>,
    timeRecords?: GraphCacheUpdateResolver<{ timeRecords: Array<WithTypename<TimeRecord>> }, Record<string, never>>,
    timeTags?: GraphCacheUpdateResolver<{ timeTags: Array<Scalars['String']> }, Record<string, never>>
  },
  Mutation?: {
    createTask?: GraphCacheUpdateResolver<{ createTask: WithTypename<Task> }, MutationCreateTaskArgs>,
    deleteTask?: GraphCacheUpdateResolver<{ deleteTask: WithTypename<Task> }, MutationDeleteTaskArgs>,
    deleteTimeRecord?: GraphCacheUpdateResolver<{ deleteTimeRecord: WithTypename<TimeRecord> }, MutationDeleteTimeRecordArgs>,
    downloadTaskKeys?: GraphCacheUpdateResolver<{ downloadTaskKeys: Scalars['String'] }, Record<string, never>>,
    editTask?: GraphCacheUpdateResolver<{ editTask: WithTypename<Task> }, MutationEditTaskArgs>,
    markTaskDone?: GraphCacheUpdateResolver<{ markTaskDone: WithTypename<Task> }, MutationMarkTaskDoneArgs>,
    modifyTimeRecordDate?: GraphCacheUpdateResolver<{ modifyTimeRecordDate: WithTypename<TimeRecord> }, MutationModifyTimeRecordDateArgs>,
    setTimewHook?: GraphCacheUpdateResolver<{ setTimewHook: Scalars['Boolean'] }, MutationSetTimewHookArgs>,
    signIn?: GraphCacheUpdateResolver<{ signIn: WithTypename<SignInPayload> }, MutationSignInArgs>,
    signOut?: GraphCacheUpdateResolver<{ signOut: Scalars['Boolean'] }, Record<string, never>>,
    signUp?: GraphCacheUpdateResolver<{ signUp: WithTypename<SignInPayload> }, MutationSignUpArgs>,
    startTask?: GraphCacheUpdateResolver<{ startTask: WithTypename<Task> }, MutationStartTaskArgs>,
    stopTask?: GraphCacheUpdateResolver<{ stopTask: WithTypename<Task> }, MutationStopTaskArgs>,
    tagTimeRecord?: GraphCacheUpdateResolver<{ tagTimeRecord: WithTypename<TimeRecord> }, MutationTagTimeRecordArgs>,
    timeStart?: GraphCacheUpdateResolver<{ timeStart: WithTypename<TimeRecord> }, Record<string, never>>,
    timeStop?: GraphCacheUpdateResolver<{ timeStop: WithTypename<TimeRecord> }, Record<string, never>>,
    untagTimeRecord?: GraphCacheUpdateResolver<{ untagTimeRecord: WithTypename<TimeRecord> }, MutationUntagTimeRecordArgs>,
    uploadTimeWarriorKey?: GraphCacheUpdateResolver<{ uploadTimeWarriorKey: Scalars['Boolean'] }, MutationUploadTimeWarriorKeyArgs>
  },
  Subscription?: {},
  SignInPayload?: {
    token?: GraphCacheUpdateResolver<Maybe<WithTypename<SignInPayload>>, Record<string, never>>,
    user?: GraphCacheUpdateResolver<Maybe<WithTypename<SignInPayload>>, Record<string, never>>
  },
  Task?: {
    depends?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    description?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    due?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    entry?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    modified?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    parent?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    priority?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    project?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    recur?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    start?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    status?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    tags?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    until?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    urgency?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>,
    uuid?: GraphCacheUpdateResolver<Maybe<WithTypename<Task>>, Record<string, never>>
  },
  TimeRecord?: {
    end?: GraphCacheUpdateResolver<Maybe<WithTypename<TimeRecord>>, Record<string, never>>,
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<TimeRecord>>, Record<string, never>>,
    start?: GraphCacheUpdateResolver<Maybe<WithTypename<TimeRecord>>, Record<string, never>>,
    tags?: GraphCacheUpdateResolver<Maybe<WithTypename<TimeRecord>>, Record<string, never>>
  },
  User?: {
    id?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    password?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    taskdUuid?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    timewHook?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    timewId?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>,
    username?: GraphCacheUpdateResolver<Maybe<WithTypename<User>>, Record<string, never>>
  },
};

export type GraphCacheConfig = Parameters<typeof cacheExchange>[0] & {
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
};