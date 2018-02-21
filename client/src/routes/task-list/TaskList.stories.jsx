import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import TaskList from './TaskList'

storiesOf('TaskList', TaskList)
  .add('with one task', () =>
    <TaskList
      tasks={[{
        'id': 999,
        'name': 'Some Name',
        'category': 'Some Category',
        'user_id': 'some user'
      }]}
      removeTaskStarted={action('remove task started')}
      toggleTask={action('toggle task')}
    />
  )
  .add('with completed task', () =>
    <TaskList
      tasks={[{
        'id': 999,
        'name': 'Some Name',
        'category': 'Some Category',
        'user_id': 'some user',
        'completed': true
      }]}
      removeTaskStarted={action('remove task started')}
      toggleTask={action('toggle task')}
    />
  )
