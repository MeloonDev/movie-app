const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <div className="d-flex justify-content-start m-3" key={index}>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </>
  );
};
export default MovieList;
