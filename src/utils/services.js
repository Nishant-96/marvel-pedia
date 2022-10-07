import axios from "axios";

export const getCharacters = async (characterName) => {
  try {
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?ts=1632998235&nameStartsWith=${characterName}&apikey=ff7d1b4aefa575448f941959adefe76d&hash=bc74402412971310d7a50ccd0dff3c7b`
    );

    return response?.data?.data?.results;
  } catch (error) {
    console.error(error);
  }
};
