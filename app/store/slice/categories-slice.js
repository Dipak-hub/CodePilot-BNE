import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import rootClient from "../../config/rootClient";
// import { errorMessageTypes } from "../../constants";

const initialState = {
  is_loading: false,
  error_message: null,
  totalPage: "",
  numberOfPage: "",
categories: [],
  category: {},
};

// get All Booking Complete trip-------------------

export const getCategories = createAsyncThunk(
  "get-categories",
  async (obj,{ rejectWithValue }) => {
    try {
      const response = await axios.get("https://www.business-northeast.com/wp-json/wp/v2/categories?per_page=100")
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

// search completed trip-------->
// export const searchCompletedTrip = createAsyncThunk(
//   "search-completed-trip",
//   async (obj, { rejectWithValue }) => {
//     const { key, value } = obj;
//     try {
//       const response = await rootClient.get(
//         `api/v1/admin/completed-trips/${key}/${value}`
//       );
//       return response;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

// Delete Completed trip----------------------------

// export const deleteCompletedTrips = createAsyncThunk(
//   "delete-completed-trips",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await rootClient.delete(
//         `api/v1/admin/completed-trips/${id}`
//       );
//       return id;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // getCompletedTripById(state, action) {
    //   state.completed_trip = state.completed_trips.find(
    //     (item) => item._id === action.payload
    //   );
    // },
  },

  extraReducers: {
    // get Confirmed trips-------------------------------------------
    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    //   state.totalPage = action.payload.total;
    //   state.numberOfPage = action.payload.numberOfPage;
      state.is_loading = false;
    },
    [getCategories.rejected]: (state, action) => {
      state.is_loading = false;
      state.error_message =
        action.payload.message || "Something Went Wrong";
    },
    [getCategories.pending]: (state) => {
      state.is_loading = true;
      state.error_message = null;
    },
  },
});

// export const { getCompletedTripById } = completedTripsSlice.actions;
export default categoriesSlice.reducer;
