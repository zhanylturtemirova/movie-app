import { connect } from "react-redux";
import {
  selectMovies,
  selectLoading,
  selectError,
  selectFilter,
  selectSortBy,
  selectSortOrder,
} from "../../store/selectors";
import { getMoviesRequest } from "../../store/actionCreators";
import MovieList from "./MovieList";

export const MovieListContainer = connect(
  (state: MoviesState) => ({
    movies: selectMovies(state),
    isLoading: selectLoading(state),
    error: selectError(state),
    filter: selectFilter(state),
    sortBy: selectSortBy(state),
    sortOrder: selectSortOrder(state),
  }),
  {
    getMoviesRequest,
  }
)(MovieList);

export default MovieListContainer;
