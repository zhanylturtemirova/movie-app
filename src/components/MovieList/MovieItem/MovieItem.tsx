import React, { FC, ReactElement, useState } from "react";
import {
  MovieWrapper,
  MoviePoster,
  MovieDescription,
  MovieTilte,
  Title,
  Genre,
  MovieDate,
  MovieMenu,
  MovieMenuWrapper,
  MovieMenuIcon,
  MenuItems,
  MenuItem,
} from "./MovieItem.styles";
import menuImg from "../../../assets/menu.png";
import AddMovieContainer from "../../AddMovie";
import DeleteMovieContainer from "../../DeleteMovie";

interface MovieItemInterface {
  movie: IMovie;
  onClickProps: () => void;
}

const MovieItem: FC<React.PropsWithChildren<MovieItemInterface>> = ({
  onClickProps,
  movie,
  movie: { poster_path, title, genres, release_date },
}): ReactElement => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  const [isEditShown, setIsEditShown] = useState<boolean>(false);
  const [isDeleteShown, setIsDeleteShown] = useState<boolean>(false);

  return (
    <>
      <MovieWrapper onClick={onClickProps}>
        <MovieMenuWrapper>
          <MovieMenu onClick={() => setIsMenuShown(true)}>
            <MovieMenuIcon src={menuImg} />
            <MenuItems isMenuShown={isMenuShown}>
              <MenuItem onClick={() => setIsEditShown(true)}>Edit</MenuItem>
              <MenuItem onClick={() => setIsDeleteShown(true)}>Delete</MenuItem>
            </MenuItems>
          </MovieMenu>
        </MovieMenuWrapper>
        <MoviePoster src={poster_path || ""} />
        <MovieDescription>
          <MovieTilte>
            <Title>{title}</Title>
            <Genre>{genres?.join(" & ")}</Genre>
          </MovieTilte>
          <MovieDate>
            <span>{release_date}</span>
          </MovieDate>
        </MovieDescription>
      </MovieWrapper>
      {isDeleteShown && (
        <DeleteMovieContainer
          isShowed={isDeleteShown}
          movieId={movie.id}
          onClose={() => setIsDeleteShown(false)}
        />
      )}
      {isEditShown && (
        <AddMovieContainer
          title="Edit Movie"
          isShowed={isEditShown}
          initialValues={movie}
          onClose={() => setIsEditShown(false)}
        />
      )}
    </>
  );
};
export default MovieItem;
