import { configure } from '@storybook/react'

function loadStories () {
  require('../src/routes/task-list/TaskList.stories')
}

configure(loadStories, module)
