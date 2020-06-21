/*
 * File: movies.tsx
 * Project: moovee-app
 * File Created: Wednesday, 3rd June 2020 8:28:22 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 3rd June 2020 10:27:34 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

import { mockResponse } from '../../assets/data';
import { TOGGLE_FAVORITE } from '../actions/favorites';

const initialState = {
  movies: mockResponse,
  favorites: [],
};

const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const checkIfAlreadyFavorite = state.favorites.find(
        (item) => item === action.movieId,
      );
      if (checkIfAlreadyFavorite) {
        const updatedFav = state.favorites.filter(
          (item) => item !== action.movieId,
        );
        return { ...state, favorites: updatedFav };
      }
      return { ...state, favorites: [...state.favorites, action.moviesId] };
    default:
      return state;
  }
  return state;
};

export default moviesReducer;
