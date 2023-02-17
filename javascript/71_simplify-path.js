/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathArray = path.split("/");
  const result = [];

  for (let i = 0; i < pathArray.length; i++) {
    const path = pathArray[i];

    if (path === "..") {
      result.pop();
    } else if (path !== "." && path !== "") {
      result.push(path);
    }
  }

  return "/" + result.join("/");
};
