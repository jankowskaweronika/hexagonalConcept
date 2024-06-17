import { TTasks } from "@/types";

const baseURL = "http://localhost:3000/"

export const getAllTasks = async(): Promise<TTasks[]> => {
  const response = await fetch(`${baseURL}/tasks`)
  const tasks = response.json
  return tasks
}