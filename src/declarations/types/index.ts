import type { Query, Response, Request } from 'express-serve-static-core'

// **** Misc **** //

export type TAll = string | number | boolean | null | object;


// **** Express **** //

export interface IReq extends Request {
}

export interface IReqQuery extends Request {
  query: Query;
  body: void;
}

export interface IRes extends Response {
  locals: {};
}
