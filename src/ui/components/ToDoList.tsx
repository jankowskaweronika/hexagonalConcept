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
    <Table sx={{ minWidth: 650 }} aria-label="caption table">
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.taskId}>
            <TableCell component="th" scope="row">
              {task.taskId}
            </TableCell>
            <TableCell align="right">{task.tasks}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ToDoList