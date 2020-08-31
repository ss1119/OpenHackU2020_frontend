const baseUrl = "https://open-hack-u-2020-backend.herokuapp.com/";

const headers = {
  "content-type": "application/x-www-form-urlencoded",
};

export function get(path) {
  return request("GET", path, null);
}

export function put(path, body) {
  return request("PUT", path, body);
}

export function post(path, body) {
  return request("POST", path, body);
}

function request(method, path, body) {
  console.log(body);
  return fetch(baseUrl + path, {
    method: method,
    headers: headers,
    body: body,
  }).then((res) => {
    return res.json();
  });
}
