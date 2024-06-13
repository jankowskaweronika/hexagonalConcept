import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

function createData(taskId: number, tasks: string) {
  return { taskId, tasks };
}

const tasks = [
  createData(1, "Task 1"),
  createData(2, "Task 2"),
  createData(3, "Task 3"),
];

const ToDoList = () => {
  return (
    <Table sx={{ width: 650 }}>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.taskId}>
            <TableCell>
              {task.taskId}
            </TableCell>
            <TableCell>{task.tasks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ToDoList