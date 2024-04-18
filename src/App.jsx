import { useState, useEffect } from "react";
import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from "./components/video";

import {apiData} from "./api/data";
import axios from "axios";

const DEFAULT_MOVIE = {
    title: "A Mulher Rei",
    description: "Em 1800, o general Nanisca treina um grupo de mulheres guerreiras para proteger o reino africano de Dahomey de um inimigo estrangeiro.",
    imageSmall: "https://vertentesdocinema.com/wp-content/uploads/2022/09/amr-cartazteaser-online-1400x2100px-data.jpg",
    imageBanner: "https://images8.alphacoders.com/125/1253813.jpg",
    linkVideo: "u1HTd_VVICQ",
    category: "movies"
};

function App() {
  const [video, setVideo] = useState(DEFAULT_MOVIE);
  const [moviesData, setMoviesDate] = useState([]);
  const [playVideo, setPlayVideo] = useState(false); 
  const baseUrl = 'http://localhost:3003'

  const {title, description, linkVideo, imageBanner} = video;

  const apiDataMovies = moviesData?.movies?.length > 0 ? moviesData : apiData;

  useEffect(() => {
    const getMoviesAndCategories = async () => {
      const {data} = await axios.get(`${baseUrl}/movies-categories`);
      setMoviesDate(data);
    }
    getMoviesAndCategories()
  })

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  const hadleVideo = (data) => {
    setVideo(data);
    window.scrollTo({top: 0});
  };

  // const createMovies = async () => {
  //   await axios.post(`${baseUrl}/movie`, apiData?.movies)
  // } colocar todos os filmes de uma vez só

  return (
    <>
      <Background imageBanner={imageBanner}> 
        <Header />
        <DescriptionMovie  
        title={title}
        description={description}
        handleOpenPlayVideo={handleOpenPlayVideo}/>
        <Movies data={apiDataMovies} hadleVideo={(data) => hadleVideo(data)}/>
        <Video 
        playVideo={playVideo} 
        handleClosePlayVideo={handleClosePlayVideo}
        linkVideo={linkVideo}/>
      </Background>
    </>
  );
}

export default App;
