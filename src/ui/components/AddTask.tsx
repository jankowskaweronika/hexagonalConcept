import { Input, Button } from '@mui/material'

import addingTask from '../../domain/addingTask'

import React from 'react'

const AddTask = () => {
  return (
    <div>
      <Input />
      <Button variant='outlined' onClick={addingTask}>Add task</Button>
    </div>
  )
}

export default AddTask