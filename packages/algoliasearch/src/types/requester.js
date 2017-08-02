// @flow

import type { AppId, ApiKey } from './';

export type RequestOptions = {|
  forwardedFor?: string,
  extraHeaders?: Object,
  extraUrlParameters?: Object,
  timeouts?: {|
    connect?: number,
    read?: number,
    write?: number,
  |},
  // ones that exist already
  userAgent?: string,
  forwardToReplicas?: boolean,
  clearExistingRules?: boolean,
|};

export type RequesterOptions = {
  ...RequestOptions,
  cache?: boolean,
  hosts?: {|
    read?: string[],
    write?: string[],
  |},
};

export type Method = 'POST' | 'GET' | 'DELETE' | 'PUT';
export type RequestArguments = {
  method: Method,
  path: string,
  qs?: Object,
  body?: Object,
  options?: Object,
};
export type Result = Object;
export type RequestMethod = RequestArguments => Promise<Result>;
export type Requester = ({ appId: AppId, apiKey: ApiKey }) => RequestMethod;