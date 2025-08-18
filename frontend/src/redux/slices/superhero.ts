import {createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit"
import axios from 'axios'
import type {Superhero, SuperheroState} from '../../types/superhero'
import {API_BASE_URL} from '../../config/api'

export const fetchSuperheroes = createAsyncThunk('superheroes/fetchSuperheroes', async () => {
    const response = await axios.get<Superhero[]>(`${API_BASE_URL}/superheroes`);
    return response.data;
})

const initialState: SuperheroState = {
    items: [],
    status: 'loading',
    error: null
}

const superheroesSlice = createSlice({
    name: 'superheroes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuperheroes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSuperheroes.fulfilled, (state, action:PayloadAction<Superhero[]>)=> {
                state.status = 'loaded';
                state.items = action.payload;
            })
            .addCase(fetchSuperheroes.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message || 'Error fetching superheroes';
            })
    }
})

export default superheroesSlice.reducer;