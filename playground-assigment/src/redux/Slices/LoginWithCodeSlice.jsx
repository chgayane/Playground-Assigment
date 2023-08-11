import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../sevices/AuthService';

export const registerUser = createAsyncThunk('auth/register', async ({ email, code, languageID }, { rejectWithValue }) => {
  const content = { email, code, languageID };
  try {
    const data = await AuthService.register(content);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    status: '',
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.status = ''; 
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.status = 'success';
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.status = 'failed';
      });
  },
});

export const { actions: authActions } = authSlice;
export default authSlice.reducer;
