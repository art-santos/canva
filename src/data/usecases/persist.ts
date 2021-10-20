import Cookie from "js-cookie";
//The responsible for creating and setting the cookie to JSON format
export const persistCookie = (place: string, data: any) => {
  const json = JSON.stringify(data);
  Cookie.set(place, json);
};
//Is the responsible for searching the cookie in the browser storage
export const getCookie = (place: string) => {
  let cookie: any = Cookie.get(place);
  return cookie;
};
