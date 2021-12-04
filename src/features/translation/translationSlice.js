import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const translate = createAsyncThunk(
  "translation/translate",
  async (apiAddress) => {
    const response = await fetch(apiAddress);
    if (!response.ok) {
      throw new Error("Request Failed!");
    }
    const data = await response.json();
    return data;
  }
);

const translationSlice = createSlice({
  name: "translation",
  initialState: {
    translationText: "",
    isLoading: false,
    hasRejected: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(translate.pending, (state) => {
        state.isLoading = true;
        state.hasRejected = false;
      })
      .addCase(translate.fulfilled, (state, action) => {
        // On its Own, action.payload Returns the Response Object from the API but in Here, Only the Translated Property is being Accessed
        state.translationText = action.payload.contents.translated;
        state.isLoading = false;
        state.hasRejected = false;
      })
      .addCase(translate.rejected, (state) => {
        state.isLoading = false;
        state.hasRejected = true;
      });
  },
});

// Selectors
export const selectTranslationText = (state) =>
  state.translation.translationText;
export const selectisLoading = (state) => state.translation.isLoading;
export const selecthasRejected = (state) => state.translation.hasRejected;

// Reducer
export default translationSlice.reducer;
