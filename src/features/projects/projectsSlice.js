import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchProjects,
  searchProjects,
  createProject,
  editProject,
  removeProject,
} from "./projectsAPI";

const initialState = {
  status: "idle",
  totalPages: 0,
  projects: [],
  isSearch: false,
  filteredProjects: [],
};

export const getProjects = createAsyncThunk(
  "projets/fetchProjects",
  async (request) => {
    const response = await fetchProjects(request);
    return response.data;
  }
);

export const filterProjects = createAsyncThunk(
  "projets/filterProjects",
  async (request, { dispatch }) => {
    console.log("request", request);
    if (request.reset || request.search === "") {
      dispatch(resetFilter());
    } else {
      const response = await searchProjects(request);
      return response.data;
    }
  }
);

export const addProject = createAsyncThunk(
  "projets/addProject",
  async (request, { dispatch }) => {
    const response = await createProject(request);
    dispatch(getProjects());
    return response.data;
  }
);

export const updateProject = createAsyncThunk(
  "projets/updateProject",
  async (request, { dispatch }) => {
    const response = await editProject(request);
    dispatch(getProjects());
    return response.data;
  }
);

export const deleteProject = createAsyncThunk(
  "projets/deleteProject",
  async (request, { dispatch }) => {
    const response = await removeProject(request);
    dispatch(getProjects());
    return response.data;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    resetFilter: (state) => {
      state.isSearch = false;
      state.filteredProjects = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = "idle";
        state.totalPages = action.payload.totalPages;
        state.projects = action.payload.pageData;
      })
      .addCase(filterProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterProjects.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload?.length > 0) {
          state.isSearch = true;
        }
        state.filteredProjects = action.payload;
      })
      .addCase(addProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(updateProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(deleteProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export const { resetFilter } = projectsSlice.actions;

export default projectsSlice.reducer;
