import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import rootClient from "../../config/rootClient";
// import { errorMessageTypes } from "../../constants";

const initialState = {
  is_loading: false,
  error_message: null,
//   totalPage: "",
//   numberOfPage: "",
posts: [],
  post: {},
  all_posts:[]
};

// get All Booking Complete trip-------------------

// export const getPosts = createAsyncThunk(
//   "get-posts",
//   async (obj,{ rejectWithValue }) => {
//     try {
//       const response = await axios.get("https://www.business-northeast.com/wp-json/wp/v2/categories?per_page=100")
//       console.log(response.data[0])
//       return response.data;
//     } catch (error) {
//       rejectWithValue(error.response.data);
//     }
//   }
// );


//Get Post by category

// search posts by categoires-------->
export const getAllPosts = createAsyncThunk(
  "get-all-posts",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?per_page=20&page=${page}&_embed`);
      console.log(page)
      console.log(response.data[0].id)
      return response.data
    } catch (error) {
      rejectWithValue(error);
    }
  }
);



// search posts by categoires-------->
export const getPostByCategory = createAsyncThunk(
  "get-post-by-category",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?categories=${id}&_embed&per_page=10&filter[orderby]=date&order=desc`);
    //   console.log(response.data[0].id)
      return response.data
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

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

const postsSlice = createSlice({
  name: "posts",
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
    // [getCategories.fulfilled]: (state, action) => {
    //   state.categories = action.payload;
    // //   state.totalPage = action.payload.total;
    // //   state.numberOfPage = action.payload.numberOfPage;
    //   state.is_loading = false;
    // },
    // [getCategories.rejected]: (state, action) => {
    //   state.is_loading = false;
    //   state.error_message =
    //     action.payload.message || "Something Went Wrong";
    // },
    // [getCategories.pending]: (state) => {
    //   state.is_loading = true;
    //   state.error_message = null;
    // },

//get all posts

[getAllPosts.fulfilled]: (state, action) => {
    state.all_posts = [...state.all_posts,...action.payload]
  //   state.totalPage = action.payload.total;
  //   state.numberOfPage = action.payload.numberOfPage;
    state.is_loading = false;
  },
  [getAllPosts.rejected]: (state, action) => {
    state.is_loading = false;
    state.error_message =
      action.payload.message || "Something Went Wrong";
  },
  [getAllPosts.pending]: (state) => {
    state.is_loading = true;
    state.error_message = null;
  },





//// get post by category

[getPostByCategory.fulfilled]: (state, action) => {
    state.posts = action.payload;
  //   state.totalPage = action.payload.total;
  //   state.numberOfPage = action.payload.numberOfPage;
    state.is_loading = false;
  },
  [getPostByCategory.rejected]: (state, action) => {
    state.is_loading = false;
    state.error_message =
      action.payload.message || "Something Went Wrong";
  },
  [getPostByCategory.pending]: (state) => {
    state.is_loading = true;
    state.error_message = null;
  },

  },
});

// export const { getCompletedTripById } = completedTripsSlice.actions;
export default postsSlice.reducer;
