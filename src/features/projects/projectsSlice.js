import { createSlice } from "@reduxjs/toolkit";

let id = 4;

const initialState = {
  projects: [
    {
      id: 1,
      name: "Landing Page",
      description: "Project",
      createdDate: "2020/09/09",
      createdHour: "10:30 am",
      asignee: {
        id: 1,
        name: "Ignacio Truffa",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      status: "enabled",
      projectManager: {
        id: 3,
        name: "Walt Cosani",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
    },
    {
      id: 2,
      name: "E-Comerce Shop",
      description: "Project",
      createdDate: "2020/09/09",
      createdHour: "10:30 am",
      asignee: {
        id: 1,
        name: "Ignacio Truffa",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      status: "enabled",
      projectManager: {
        id: 3,
        name: "Walt Cosani",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
    },
    {
      id: 3,
      name: "CMR Linkroom",
      description: "Project",
      createdDate: "2020/09/09",
      createdHour: "10:30 am",
      asignee: {
        id: 1,
        name: "Ignacio Truffa",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      status: "enabled",
      projectManager: {
        id: 3,
        name: "Walt Cosani",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
    },
  ],
  filteredProjects: [],
};

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
  },
});

export const { addProject, deleteProject, udpateProject } =
  projectsSlice.actions;

export const selectCount = (state) => state.projects.value;

export default projectsSlice.reducer;
