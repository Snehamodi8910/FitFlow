export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6db5bceeddmshcd5bbc267edeb59p1d014fjsnfce2d7d8ad20",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6db5bceeddmshcd5bbc267edeb59p1d014fjsnfce2d7d8ad20",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
