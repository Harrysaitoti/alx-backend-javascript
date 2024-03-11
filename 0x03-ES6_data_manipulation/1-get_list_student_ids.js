function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return []; // Return empty array if input is not an array

  return arr.map(student => student.id);
}

export default getListStudentIds;
