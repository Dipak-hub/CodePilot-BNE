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
  all_posts:[],
  first_video:{},
  video_link:''
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
      return response.data
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//find first video
export const getFirstVideo = createAsyncThunk(
  "get-first-video",
  async (obj, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?categories=7051&_embed&per_page=1&filter[orderby]=date&order=desc`)
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
    getVideoLink(state,action){
      // const text=state.first_video[0].content_rendered
      const text=(state.first_video[0]?.content?.rendered)

      var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    var match = text?.match(regExp);

    // console.log(match[2].slice(0,11))
    if (match) {
      state.video_link=match[2].slice(0,11)
     
    } else {
      console.log("Not found")
    }
    }
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

  [getFirstVideo.fulfilled]:(state,action)=>{
    state.first_video=action.payload;
    state.is_loading=false
  },
  [getFirstVideo.pending]: (state) => {
    state.is_loading = true;
    state.error_message = null;
  },
  [getFirstVideo.rejected]: (state, action) => {
    state.is_loading = false;
    state.error_message =
      action.payload.message || "Something Went Wrong";
  },

  },
});

export const { getVideoLink } = postsSlice.actions;
export default postsSlice.reducer;
