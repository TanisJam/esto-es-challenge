let projects = [
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
    status: "Enabled",
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
    status: "Enabled",
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
    status: "Enabled",
    projectManager: {
      id: 3,
      name: "Walt Cosani",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  },
  {
    id: 4,
    name: "Blog",
    description: "Project",
    createdDate: "2021/09/09",
    createdHour: "8:32 am",
    asignee: {
      id: 1,
      name: "Ignacio Truffa",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    status: "Enabled",
    projectManager: {
      id: 3,
      name: "Walt Cosani",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
  },
];
let id = 5;

export function fetchProjects(props) {
  const page = props?.page || 0;
  const start = 0;
  const count = 3;
  const pageData = projects.slice(start + page * count, count + page * count);

  const totalPages = Math.ceil(projects.length / count);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: {pageData, totalPages} });
    }, 200);
  });
}

export function searchProjects(props) {
  const query = props.search;
  const data = projects.filter((project) =>
    project.name.toLowerCase().includes(query.toLowerCase())
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data });
    }, 500);
  });
}

export function createProject(props) {
  const { name, description, asignee, status, projectManager } = props;
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
  projects.push(projectToAdd);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(projectToAdd);
    }, 500);
  });
}

export function editProject(props) {
  const { id, name, description, asignee, status, projectManager } = props;
  projects = projects.map((project) => {
    if (project.id === id) {
      const projectToAdd = {
        id,
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
      return projectToAdd;
    }
    return project;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ sucsess: true });
    }, 500);
  });
}

export function removeProject(props) {
  const id = props;
  projects = projects.filter((project) => project.id !== id);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ sucsess: true });
    }, 500);
  });
}
