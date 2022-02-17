const projects = [
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

export function fetchProjects(props) {
  const start = props?.start || 0;
  const count = props?.count || projects.length;

  const data = projects.slice(start, count);

  console.log("fetchProjects");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data });
    }, 500);
  });
}

export function searchProjects(props) {
  const query = props.query;
  const data = projects.filter((project) =>
    project.name.toLowerCase().includes(query.toLowerCase())
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data });
    }, 500);
  });
}
