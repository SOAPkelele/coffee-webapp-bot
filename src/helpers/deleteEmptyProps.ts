export default function deleteEmptyProps(obj: any): any {
  // modifies passed obj in place, removing empty properties (inc. empty arrays)
  return Object.keys(obj).forEach((k) => {
    if (
      !obj[k] ||
      obj[k] === undefined ||
      (Array.isArray(obj[k]) && obj[k].length === 0)
    ) {
      delete obj[k]
    }
  })
}
