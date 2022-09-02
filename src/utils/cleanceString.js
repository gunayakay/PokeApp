function cleanceString(entryText) {
  console.log(entryText, typeof entryText);
  return entryText.replace(/\n/g, " ");
}
export default cleanceString;
