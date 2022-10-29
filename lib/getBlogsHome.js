export const getBlogsHome = async () => {
  const response = await fetch(`${process.env.apiUrl}/BlogsHome.json`);

  if (!response.ok)
    throw new Error(`Somthing went wrong. ${response.statusText}`);

  const dataFetch = await response.json();

  let data = [];

  for (const item in dataFetch) {
    data.push({
      id: item,
      title: dataFetch[item].title,
      description: dataFetch[item].description,
      date: {
        day: dataFetch[item].day,
        month: dataFetch[item].month,
      },
    });
  }

  return data;
};
