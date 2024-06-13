const BASE_URL = 'http://localhost:5000';

export const PARFUMS_URL = BASE_URL + '/api/parfums';
export const PARFUMS_TAGS_URL = PARFUMS_URL + '/tags';
export const PARFUMS_BY_SEARCH_URL = PARFUMS_URL + '/search/';
export const PARFUMS_BY_TAG_URL = PARFUMS_URL + '/tag/';
export const PARFUMS_BY_ID_URL = PARFUMS_URL + '/';
export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';
export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';