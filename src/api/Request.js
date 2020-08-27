const baseUrl = "hogehoge";

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
  return fetch(baseUrl + path, { method, headers, body }).then((res) => {
    return res.json();
  });
}
