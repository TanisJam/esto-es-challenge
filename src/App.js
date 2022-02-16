import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import Main from "./components/Main";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Modal />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
