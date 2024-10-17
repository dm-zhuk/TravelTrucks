import { createSelector } from '@reduxjs/toolkit';

export const selectAdvert = state => state.adverts.items;

export const selectLoader = state => state.adverts.isLoading;

export const selectFavorites = state => state.favorites;

export const selectFilter = state => state.adverts.filter;

export const selectCurrentPage = state => state.pagination.page;

export const selectError = state => state.items.error;

export const selectVisibleAdvert = createSelector(
  [selectAdvert, selectFilter],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
