import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      name: "Landing Page",
      createdDate: "2020-09-09",
      createdHour: "10:30",
      asignedTo: "Ignacio Truffa",
      status: "enabled",
      projectManager: "Walt Cosani",
    },
    {
      id: 2,
      name: "E-Comerce Shop",
      createdDate: "2020-09-09",
      createdHour: "10:30",
      asignedTo: "Ignacio Truffa",
      status: "enabled",
      projectManager: "Walt Cosani",
    },
    {
      id: 3,
      name: "CMR Linkroom",
      createdDate: "2020-09-09",
      createdHour: "10:30",
      asignedTo: "Ignacio Truffa",
      status: "enabled",
      projectManager: "Walt Cosani",
    },
  ],
  filteredProjects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    udpateProject: (state, action) => {
      state.projects = state.projects.map((project) =>
        project.id === action.payload.id ? action.payload : project
      );
    },
  },
});

export const { addProject, deleteProject, udpateProject } =
  projectsSlice.actions;

export const selectCount = (state) => state.projects.value;

export default projectsSlice.reducer;
