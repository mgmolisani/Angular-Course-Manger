export function errorCallback(data) {
  console.log(data);
  throw new Error(data.message);
}
