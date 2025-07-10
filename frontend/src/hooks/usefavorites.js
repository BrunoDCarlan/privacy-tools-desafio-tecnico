import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav !== id));
  };

  const isFavorite = (id) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, isFavorite };
}