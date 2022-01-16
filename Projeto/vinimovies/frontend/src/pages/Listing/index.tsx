import React, { useEffect, useState } from 'react'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import axios from 'axios' 
import { BASE_URL } from 'utils/request';
import { MoviePage} from 'types/movie'

export default function Listing(){

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>(
        {
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
        .then(resonse => { 
            const data = resonse.data as MoviePage;
            setPage(data)
        })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber (newPageNumber);
    }

    return(
        <> 
            <Pagination page={page} onChange={handlePageChange}/>
            <div className="container">
                <div className="row">
                    {page.content.map(item => (
                        <div key={item.id} className="col-sm-6 col-lg-4 col-xl-4 mb-3">
                        <MovieCard movie={item}/>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}