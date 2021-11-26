export let movies = [
    {
        id: "0",
        name: "Star Wars",    
        score: 0.1
    },
    {
        id: "1",
        name: "Avengers",    
        score: 3
    },
    {
        id: "2",
        name: "About Time",    
        score: 20
    },
    {
        id: "3",
        name: "Notting Hill",    
        score: 40
    },
    {
        id: "4",
        name: "Freed",    
        score: 80
    },
    {
        id: "5",
        name: "Dances Wolves",    
        score: 26
    },
    
]

export const getMovies = () => movies

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id))
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}//일치하는 아이디에 맞는것만 빼고 새로운 배열 생성후 비교해서 movies에 재할당해줌