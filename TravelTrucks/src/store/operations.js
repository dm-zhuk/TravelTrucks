import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66393a1d4253a866a250c722.mockapi.io/advert';

export const fetchAll = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || 'Failed to fetch data'
    );
  }
});

export const fetchAdvertById = createAsyncThunk(
  'fetchAdvertById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Failed to fetch data by ID'
      );
    }
  }
);

export const createAdvert = createAsyncThunk(
  'createAdvert',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/adverts', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Failed to create advert'
      );
    }
  }
);

export const updateAdvert = createAsyncThunk(
  'updateAdvert',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.put(`/adverts/${id}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Failed to update advert'
      );
    }
  }
);

export const deleteAdvert = createAsyncThunk(
  'deleteAdvert',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/adverts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || 'Failed to delete advert'
      );
    }
  }
);
