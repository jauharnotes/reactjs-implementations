import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import ImagePlaceHolder from "../img/img-placeholder.png";

function ApiCall() {
  const [movies, setMovies] = useState([]);
  const getAPI = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    console.log(data.results);
    setMovies(data.results);
  };

  const getBanner = (movie) => {
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w342${movie.backdrop_path}`;
    } else {
      return ImagePlaceHolder;
    }
  };

  const getImage = (movie) => {
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    } else {
      return ImagePlaceHolder;
    }
  };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <Container>
      <h1>Test API</h1>
      <Carausel>
        <Splide
          options={ {
            perPage: 4,
            rewind: true,
            width : '100%',
            gap   : '1rem',
          } }
        >
          {movies.map((movie) => {
            return (
              <SplideSlide key={movie.id}>
                <img src={getBanner(movie)} alt={movie.title}  />
              </SplideSlide>
            );
          })}
        </Splide>
      </Carausel>
      <Card>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <img src={getImage(movie)} alt={movie.title}/>
              <figcaption style={{maxWidth: "200px"}}>{movie.title}</figcaption>
            </div>
          );
        })}
      </Card>
    </Container>
  );
}

const Carausel = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
`;

const Container = styled.div`
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  
  img {
    border-radius: 1rem;
    height: 300px;
  }
`;

export default ApiCall;
