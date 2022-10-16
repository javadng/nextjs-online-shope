const arrayCreator = (start, end) => {
  let length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

export default arrayCreator;
