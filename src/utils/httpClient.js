const api = "https://api.themoviedb.org/3"

export function httpGet(path) {
    return fetch(api + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjkzMzgyZjljMjg4ZDY2NDdjM2RiYzA2YmU2NGJkNyIsInN1YiI6IjYwYzcwZWY3OTkyNTljMDA3OTIwODkyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a9cq0-O6x43q2u_1pXEsLSNpRDX2YOmDC6HaI5ZoibU",
            "Content-type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json())
}