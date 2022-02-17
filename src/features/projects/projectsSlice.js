import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "./projectsAPI";

let id = 4;

const initialState = {
  status: "idle",
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

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      const { name, description, asignee, status, projectManager } =
        action.payload;
      const projectToAdd = {
        id: id++,
        name,
        description,
        createdDate: "2020/09/09",
        createdHour: "10:30 am",
        asignee: {
          id: 1,
          name: asignee,
          avatar: "https://i.pravatar.cc/150",
        },
        status,
        projectManager: {
          id: 3,
          name: projectManager,
          avatar: "https://i.pravatar.cc/150",
        },
      };
      state.projects.push(projectToAdd);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    udpateProject: (state, action) => {
      const { name, description, projectManager, asignee, status } =
        action.payload;
      state.projects = state.projects.map((project) => {
        if (project.id === action.payload.id) {
          const projectEdited = {
            ...project,
            name,
            description,
            status,
          };
          projectEdited.projectManager.name = projectManager;
          projectEdited.asignee.name = asignee;
          return projectEdited;
        }
        return project;
      });
    },
    filterProjects: (state, action) => {
      const { search, reset } = action.payload;
      if (reset) {
        state.isSearch = false;
        state.filteredProjects = [];
      } else {
        state.isSearch = true;
        state.filteredProjects = state.projects.filter((project) => {
          const { name } = project;
          return name.toLowerCase().includes(search.toLowerCase());
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = "idle";
        state.projects = action.payload;
      });
  },
});

export const { addProject, deleteProject, udpateProject, filterProjects } =
  projectsSlice.actions;

export default projectsSlice.reducer;
