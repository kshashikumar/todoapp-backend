import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../utils/prismaClient";

export const getAllTasks = async (_req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.findUniqueOrThrow({
      where: {
        id: parseInt(id),
      },
    });
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: "Task not found" });
  }
};

export const addTask = async (req: Request, res: Response) => {
  const { title, color } = req.body;
  const task = await prisma.task.create({
    data: { title, color },
  });
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const { title, color, completed } = req.body;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, color, completed },
  });
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.json({ message: "Task deleted" });
};
