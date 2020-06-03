/*
 * File: favorites.tsx
 * Project: moovee-app
 * File Created: Wednesday, 3rd June 2020 10:07:44 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Wednesday, 3rd June 2020 10:20:36 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const addFavorite = (movieId: string) => {
  return { type: TOGGLE_FAVORITE, movieId };
};
