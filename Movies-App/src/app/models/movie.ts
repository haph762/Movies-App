export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    revenue: number,
    runtime: number | null,
    status: string,
    genres: genre[];
}
export interface MovieDto{
    page: number,
    results: Movie[],
    dates: {
        minimum: string,
        maximum: string,
    },
    total_pages: number,
    total_result: number,
}
export interface genre{
    id: number,
    name: string,
}
export interface MovieVideoDto{
    id: number,
    results: MovieVideo[],
}
export interface MovieVideo{
    key: string,
    name: string,
    site: string,
}
export interface MovieImages{
    backdrops:{
        file_path: string;
    }[],
}
export interface MovieCredits{
    cast:{
        name: string,
        profile_path: string,
    }[],
}