import { get } from "http";


const getWord = async() => {
 const  response = get  await ("https://random-word-api.herokuapp.com/word?length=5");
  
 return response.data;
  
}
export default getWord;