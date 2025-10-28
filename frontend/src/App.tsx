import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Task from "./interface/Tasks";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/tasks/create",
        {
          title,
          description,
        }
      );

      const newTask = response.data.task;
      setTasks((prevTasks) => [newTask, ...prevTasks]);

      console.log("Task Added: ", response.data);
      toast.success("Task added successfully!");

      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("Failed to add task!");
    }
  };

  const getAllTasks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/tasks/findAll"
      );
      setTasks(response.data.tasks);
      console.log("Task SHOW: ", response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to mark task as done!");
    }
  };

  const handleDone = async (taskId: number) => {
    try {
      await axios.put(`http://localhost:5000/api/v1/tasks/update/${taskId}`, {
        status: "completed",
      });

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

      toast.success("Task marked as completed!");
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to mark task as done!");
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="container">
      <div className="todo-container">
        <div className="todo-container-left element">
          <div>
            <h3>Add a Task</h3>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div>
              <textarea
                className="textarea"
                placeholder="Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                width: "83%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button className="button" type="button" onClick={handleAddTask}>
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="todo-container-right element">
          {tasks.length > 0 ? (
            tasks
              .filter((task) => task.status !== "completed")
              .slice(0, 5)
              .map((task) => (
                <div key={task.id} className="box">
                  <div className="box-title">{task.title}</div>
                  <div className="box-flex">
                    <div className="box-description">{task.description}</div>
                    <div className="box-button">
                      <button type="button" onClick={() => handleDone(task.id)}>
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <p style={{ margin: "30px" }}>No tasks yet</p>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
