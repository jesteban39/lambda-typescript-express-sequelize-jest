import type {APIGatewayProxyHandler} from 'aws-lambda'

export type LambdaConfog = {
  method: string
  path: string
  params: {[key: string]: string}
  cerys: {[key: string]: string}
  headers: {[key: string]: string}
  body: any
}

export type LambdaResult = {
  headers: {[header: string]: string | number | boolean}
  statusCode: number
  body: any
}

let lamda = <APIGatewayProxyHandler | null>null

const spy = async (config: LambdaConfog): Promise<LambdaResult> => {
  if (!lamda) throw Error('No se ha llamado a agent')
  const res = await lamda(
    {
      body: JSON.stringify(config.body),
      headers: config.headers,
      isBase64Encoded: false,
      pathParameters: {default: config.path},
      queryStringParameters: null,
      requestContext: {
        accountId: 'offlineContext_accountId',
        apiId: 'offlineContext_apiId',
        authorizer: {lambda: {}, jwt: [Object]},
        domainName: 'offlineContext_domainName',
        domainPrefix: 'offlineContext_domainPrefix',
        requestId: 'offlineContext_resourceId',
        routeKey: '$default',
        stage: '$default',
        httpMethod: config.method,
        protocol: 'http',
        path: config.path,
        resourcePath: config.path,
        requestTimeEpoch: 1,
        resourceId: '',
        identity: {
          accessKey: null,
          accountId: null,
          apiKey: null,
          apiKeyId: null,
          caller: null,
          clientCert: null,
          cognitoAuthenticationProvider: null,
          cognitoAuthenticationType: null,
          cognitoIdentityId: null,
          cognitoIdentityPoolId: null,
          principalOrgId: null,
          sourceIp: '',
          user: null,
          userAgent: null,
          userArn: null
        }
      },
      stageVariables: null,
      multiValueHeaders: {},
      httpMethod: config.method,
      path: config.path,
      multiValueQueryStringParameters: null,
      resource: ''
    },
    {
      callbackWaitsForEmptyEventLoop: false,
      functionName: '',
      functionVersion: '',
      invokedFunctionArn: '',
      memoryLimitInMB: '',
      awsRequestId: '',
      logGroupName: '',
      logStreamName: '',
      getRemainingTimeInMillis: function (): number {
        throw new Error('Function not implemented. getRemainingTimeInMillis')
      },
      done: function (): void {
        throw new Error('Function not implemented. done')
      },
      fail: function (): void {
        throw new Error('Function not implemented. fail')
      },
      succeed: function (): void {
        throw new Error('Function not implemented. succeed')
      }
    },
    function (): void {
      throw new Error('Function not implemented.')
    }
  )

  if (typeof res?.body !== 'string') throw Error('body no existe')
  if (typeof res.headers === 'undefined') throw Error('bodyheaders no existe')
  return {...res, body: JSON.parse(res?.body), headers: res.headers}
}

export const agent = (andler: APIGatewayProxyHandler) => {
  lamda = andler
  return spy
}

const equivalent = (actual: {[x: string]: any}, initial: {[x: string]: any}) => {
  const initialKeys = Object.keys(initial)
  return initialKeys.reduce((ecual: {[x: string]: any}, key: string) => {
    ecual[key] = actual[key]
    return ecual
  }, {})
}

const mekeEvent = (config: LambdaConfog) => {
  return {
    httpMethod: config.method,
    queryStringParameters: config.params,
    headers: config.headers, // ?? {'Content-Type': 'application/json; charset=utf-8'},
    path: config.path,
    body: JSON.stringify(config.body),
    requestContext: {
      resourcePath: config.path,
      httpMethod: config.method
    }
  }
}

export default agent
