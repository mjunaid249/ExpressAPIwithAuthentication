import { Task } from "../models/task.js";

export async function newTask(req, res, next) {
  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: req.user,
  });

  res.status(201).json({
    success: true,
    message: "Task Added",
  });
}

export async function getmyTask(req, res, next) {
  const userid = req.user._id;

  const tasks = await Task.find({ user: userid });

  res.status(200).json({
    success: true,
    tasks,
  });
}

export async function deleteTask(req, res, next) {
  const task = await Task.findById(req.params.id);
  await task.deleteOne();
  res.status(200).json({
    message: "Task Deleted!",
    success: true,
  });
}
export async function updateTask(req, res, next) {
  const task = await Task.findById(req.params.id);

  task.isCompleted = !task.isCompleted;

  await task.save();
  res.status(200).json({
    success: true,
    message: "Task Updated!",
  });
}
