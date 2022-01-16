import React from "react";
import './style.css'
import MovieStars from "components/MovieStars";

type Props = {
    score: number;
    count: number;
}

export default function MovieScore({ score, count } : Props){

    if (count === 1){
        return(
            <div className="dsmovie-score-container">
                <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
                <MovieStars score={score}/>
                <p className="dsmovie-score-count">{count} avaliação</p>
        </div>
        )
    }

    else {
    return(
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
    }
}