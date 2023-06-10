import { useState, useEffect } from "react";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import MovieCard from "../components/MovieCard";
import './Movie.css';

import { useParams } from "react-router-dom";

const movieUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const Movie = () => {
    // Pegando o :id que está sendo passado do na rota
    const { id } = useParams();
    // Criando o estado que irá armazenar o filme buscado na api
    const [movie, setMovie] = useState(null);

    //função que irá realizar a requisição da api
    //recebe uma url pro parametro
    const getMovie = async (url) => {
        const resposta = await fetch(url);
        const filme = await resposta.json();
        setMovie(filme);
    }

    // montando a url e chamando a função 
    useEffect(() => {
        const url = `${movieUrl}${id}?${apiKey}`
        getMovie(url);
    }, [])

    //função para formatar os valores inteiros para dollar
    const formatarValores = (num) => {
        return num.toLocaleString('en-us',{
            style: "currency",
            currency: "USD"
        });
    }

    return (
        <div className="movie-page">
            {movie &&
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <div className="info">
                        <h3>
                            <BsWallet2 />Orçamento:
                        </h3>
                        <p>{formatarValores(movie.budget)}</p>
                    </div>

                    <div className="info">
                        <h3>
                            <BsGraphUp />Receita:
                        </h3>
                        <p>{formatarValores(movie.revenue)}</p>
                    </div>

                    <div className="info">
                        <h3>
                            <BsHourglassSplit />Duração:
                        </h3>
                        <p>{movie.runtime} Minutos</p>
                    </div>
                    
                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill />Descrição:
                        </h3>
                        <p>{movie.overview} </p>
                    </div>
                </>
            }
        </div>
    )
    return (
        <div>
            Id do filme selecionado = {id}
        </div>
    );
}

export default Movie;