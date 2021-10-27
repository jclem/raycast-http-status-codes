export interface HTTPStatusCode {
  code: number
  name: string
  category: string
  description: string
}

export const StatusCodes: HTTPStatusCode[] = [
  {
    code: 100,
    category: 'Information responses',
    name: 'Continue',
    description:
      'This interim response indicates that the client should continue the request or ignore the response if the request is already finished.'
  },

  {
    code: 101,
    category: 'Information responses',
    name: 'Switching Protocol',
    description:
      'This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.'
  },

  {
    code: 102,
    category: 'Information responses',
    name: 'Processing (WebDAV)',
    description:
      'This code indicates that the server has received and is processing the request, but no response is available yet.'
  },

  {
    code: 103,
    category: 'Information responses',
    name: 'Early Hints',
    description:
      'This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.'
  },

  {
    code: 200,
    category: 'Successful responses',
    name: 'OK',
    description:
      "The request succeeded. The result meaning of 'success' depends on the HTTP method."
  },

  {
    code: 201,
    category: 'Successful responses',
    name: 'Created',
    description:
      'The request succeeded, and a new resource created as a result. This is typically the response sent after POST requests, or some PUT requests.'
  },

  {
    code: 202,
    category: 'Successful responses',
    name: 'Accepted',
    description:
      'The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.'
  },

  {
    code: 203,
    category: 'Successful responses',
    name: 'Non-Authoritative Information',
    description:
      'This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status.'
  },

  {
    code: 204,
    category: 'Successful responses',
    name: 'No Content',
    description:
      'There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones.'
  },

  {
    code: 205,
    category: 'Successful responses',
    name: 'Reset Content',
    description:
      'Tells the user agent to reset the document which sent this request.'
  },

  {
    code: 206,
    category: 'Successful responses',
    name: 'Partial Content',
    description:
      'This response code is used when the Range header is sent from the client to request only part of a resource.'
  },

  {
    code: 207,
    category: 'Successful responses',
    name: 'Multi-Status (WebDAV)',
    description:
      'Conveys information about multiple resources, for situations where multiple status codes might be appropriate.'
  },

  {
    code: 208,
    category: 'Successful responses',
    name: 'Already Reported (WebDAV)',
    description:
      'Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.'
  },

  {
    code: 226,
    category: 'Successful responses',
    name: 'IM Used (HTTP Delta encoding)',
    description:
      'The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.'
  },

  {
    code: 300,
    category: 'Redirection messages',
    name: 'Multiple Choice',
    description:
      'The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)'
  },

  {
    code: 301,
    category: 'Redirection messages',
    name: 'Moved Permanently',
    description:
      'The URL of the requested resource has been changed permanently. The new URL is given in the response.'
  },

  {
    code: 302,
    category: 'Redirection messages',
    name: 'Found',
    description:
      'This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.'
  },

  {
    code: 303,
    category: 'Redirection messages',
    name: 'See Other',
    description:
      'The server sent this response to direct the client to get the requested resource at another URI with a GET request.'
  },

  {
    code: 304,
    category: 'Redirection messages',
    name: 'Not Modified',
    description:
      'This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.'
  },

  {
    code: 305,
    category: 'Redirection messages',
    name: 'Use Proxy ',
    description:
      'Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.'
  },

  {
    code: 306,
    category: 'Redirection messages',
    name: 'unused',
    description:
      'This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.'
  },

  {
    code: 307,
    category: 'Redirection messages',
    name: 'Temporary Redirect',
    description:
      'The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.'
  },

  {
    code: 308,
    category: 'Redirection messages',
    name: 'Permanent Redirect',
    description:
      'This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.'
  },

  {
    code: 400,
    category: 'Client error responses',
    name: 'Bad Request',
    description:
      'The server could not understand the request due to invalid syntax.'
  },

  {
    code: 401,
    category: 'Client error responses',
    name: 'Unauthorized',
    description:
      "Although the HTTP standard specifies 'unauthorized', semantically this response means 'unauthenticated'. That is, the client must authenticate itself to get the requested response."
  },

  {
    code: 402,
    category: 'Client error responses',
    name: 'Payment Required ',
    description:
      'This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.'
  },

  {
    code: 403,
    category: 'Client error responses',
    name: 'Forbidden',
    description:
      "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server."
  },

  {
    code: 404,
    category: 'Client error responses',
    name: 'Not Found',
    description:
      'The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web.'
  },

  {
    code: 405,
    category: 'Client error responses',
    name: 'Method Not Allowed',
    description:
      'The request method is known by the server but is not supported by the target resource. For example, an API may not allow calling DELETE to remove a resource.'
  },

  {
    code: 406,
    category: 'Client error responses',
    name: 'Not Acceptable',
    description:
      "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent."
  },

  {
    code: 407,
    category: 'Client error responses',
    name: 'Proxy Authentication Required',
    description:
      'This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.'
  },

  {
    code: 408,
    category: 'Client error responses',
    name: 'Request Timeout',
    description:
      'This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.'
  },

  {
    code: 409,
    category: 'Client error responses',
    name: 'Conflict',
    description:
      'This response is sent when a request conflicts with the current state of the server.'
  },

  {
    code: 410,
    category: 'Client error responses',
    name: 'Gone',
    description:
      "This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for 'limited-time, promotional services'. APIs should not feel compelled to indicate resources that have been deleted with this status code."
  },

  {
    code: 411,
    category: 'Client error responses',
    name: 'Length Required',
    description:
      'Server rejected the request because the Content-Length header field is not defined and the server requires it.'
  },

  {
    code: 412,
    category: 'Client error responses',
    name: 'Precondition Failed',
    description:
      'The client has indicated preconditions in its headers which the server does not meet.'
  },

  {
    code: 413,
    category: 'Client error responses',
    name: 'Payload Too Large',
    description:
      'Request entity is larger than limits defined by server. The server might close the connection or return an Retry-After header field.'
  },

  {
    code: 414,
    category: 'Client error responses',
    name: 'URI Too Long',
    description:
      'The URI requested by the client is longer than the server is willing to interpret.'
  },

  {
    code: 415,
    category: 'Client error responses',
    name: 'Unsupported Media Type',
    description:
      'The media format of the requested data is not supported by the server, so the server is rejecting the request.'
  },

  {
    code: 416,
    category: 'Client error responses',
    name: 'Range Not Satisfiable',
    description:
      "The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data."
  },

  {
    code: 417,
    category: 'Client error responses',
    name: 'Expectation Failed',
    description:
      'This response code means the expectation indicated by the Expect request header field cannot be met by the server.'
  },

  {
    code: 418,
    category: 'Client error responses',
    name: "I'm a teapot",
    description: 'The server refuses the attempt to brew coffee with a teapot.'
  },

  {
    code: 421,
    category: 'Client error responses',
    name: 'Misdirected Request',
    description:
      'The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.'
  },

  {
    code: 422,
    category: 'Client error responses',
    name: 'Unprocessable Entity (WebDAV)',
    description:
      'The request was well-formed but was unable to be followed due to semantic errors.'
  },

  {
    code: 423,
    category: 'Client error responses',
    name: 'Locked (WebDAV)',
    description: 'The resource that is being accessed is locked.'
  },

  {
    code: 424,
    category: 'Client error responses',
    name: 'Failed Dependency (WebDAV)',
    description: 'The request failed due to failure of a previous request.'
  },

  {
    code: 425,
    category: 'Client error responses',
    name: 'Too Early ',
    description:
      'Indicates that the server is unwilling to risk processing a request that might be replayed.'
  },

  {
    code: 426,
    category: 'Client error responses',
    name: 'Upgrade Required',
    description:
      'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).'
  },

  {
    code: 428,
    category: 'Client error responses',
    name: 'Precondition Required',
    description:
      "The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."
  },

  {
    code: 429,
    category: 'Client error responses',
    name: 'Too Many Requests',
    description:
      "The user has sent too many requests in a given amount of time ('rate limiting')."
  },

  {
    code: 431,
    category: 'Client error responses',
    name: 'Request Header Fields Too Large',
    description:
      'The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.'
  },

  {
    code: 451,
    category: 'Client error responses',
    name: 'Unavailable For Legal Reasons',
    description:
      'The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.'
  },

  {
    code: 500,
    category: 'Server error responses',
    name: 'Internal Server Error',
    description:
      'The server has encountered a situation it does not know how to handle.'
  },

  {
    code: 501,
    category: 'Server error responses',
    name: 'Not Implemented',
    description:
      'The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.'
  },

  {
    code: 502,
    category: 'Server error responses',
    name: 'Bad Gateway',
    description:
      'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'
  },

  {
    code: 503,
    category: 'Server error responses',
    name: 'Service Unavailable',
    description:
      'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.'
  },

  {
    code: 504,
    category: 'Server error responses',
    name: 'Gateway Timeout',
    description:
      'This error response is given when the server is acting as a gateway and cannot get a response in time.'
  },

  {
    code: 505,
    category: 'Server error responses',
    name: 'HTTP Version Not Supported',
    description:
      'The HTTP version used in the request is not supported by the server.'
  },

  {
    code: 506,
    category: 'Server error responses',
    name: 'Variant Also Negotiates',
    description:
      'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.'
  },

  {
    code: 507,
    category: 'Server error responses',
    name: 'Insufficient Storage (WebDAV)',
    description:
      'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
  },

  {
    code: 508,
    category: 'Server error responses',
    name: 'Loop Detected (WebDAV)',
    description:
      'The server detected an infinite loop while processing the request.'
  },

  {
    code: 510,
    category: 'Server error responses',
    name: 'Not Extended',
    description:
      'Further extensions to the request are required for the server to fulfill it.'
  },

  {
    code: 511,
    category: 'Server error responses',
    name: 'Network Authentication Required',
    description:
      'Indicates that the client needs to authenticate to gain network access.'
  }
]
