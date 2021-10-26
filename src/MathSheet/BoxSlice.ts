import { createSlice, PayloadAction } from 'redux-toolkit';
import type { RootState } from './store';

interface TeXState {
    code: string
}

const initialState: TeXState = {
    code: ""
}

export const texSlice = createSlice({
    name: "TeX",
    initialState,
    reducer: {
        
    }
});