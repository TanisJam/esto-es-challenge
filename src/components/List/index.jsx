import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function List() {
  const { projects } = useSelector((state) => state.projects);
  console.log(projects);
  return (
    <div className="list">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}
