export function includeObj(obj, includesKey) {
  const newObj = {};
  Object.keys(obj)
    .filter((key) => includesKey.includes(key)) // ["name , email"]
    .forEach((key) => (newObj[key] = obj[key])); // {name : "saheb" , email : "user@gmail.com" }
  return newObj;
}
