import "./Home.css";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

//Pegando o dados do arquivo .env
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = () => {
    //criando state que ira armazenar os filmes que virão da api
    const [movies, setMovies] = useState([])

    //função que ira resgatar os dados da api
    const getMovies = async (url) =>{
        
        const resposta = await fetch(url);
        console.log(resposta);
        const dados = await resposta.json();
        

        setMovies(dados.results);
    }

    // useEffect é responsavel por executar a função getMovies()
    // sempre que a pagina carregar 
    useEffect(() =>{
        //montando a url de consulta da api
        const url = `${moviesUrl}top_rated?${apiKey}`;
        //chamando a função e passando a url
        getMovies(url);
    }, [])
    return (
        <div className="container">
            <h2 className="title">
                Melhores filmes
            </h2>
            <div className="movies-container">
                {movies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie} />
                 )}
            </div>
        </div>
    )
}

export default Home;

