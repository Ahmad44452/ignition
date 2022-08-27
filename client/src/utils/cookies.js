import cookies from "react-cookies";

export const getTokenCookie = () => cookies.load('x-access-token');

export const removeTokenCookie = () => cookies.remove('x-access-token');

export const getAuthHeader = {
  headers: {
    'x-access-token': getTokenCookie()
  }
}