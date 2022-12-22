export const useHttp = () => {
  const request = async ({
    url = "",
    method = "GET",
    body = null,
    headers = {},
    token = false,
  }) => {
    if (token) {
      headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      headers["Content-type"] = `application/json`;
    }
    let res = await fetch(`https://houzing-app.herokuapp.com/api${url}`, {
      method,
      body: method === "GET" ? null : JSON.stringify(body),
      headers,
    }).then((res) => res.json());
    if (res?.success) {
      console.log(res?.success, "suc");
      return res;
    } else {
      throw new Error(res?.message || "Something Wrong");
    }
  };
  return { request };
};
