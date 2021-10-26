import { createSlice, PayloadAction } from 'redux-toolkit';
import type { RootState } from './Store';

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