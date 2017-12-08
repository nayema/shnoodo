import page from './home-page'

describe('shnoodo', function () {
  beforeEach(async function () {
    await page.open()
  })

  it('is able to add a task', async function () {
    await addTask('some task')

    await hasTaskNamed('some task')
  })

  it('is able to remove a task', async function () {
    await addTask('existing task')

    await removeTask('existing task')

    await doesNotHaveTask('existing task')
  })

  async function removeTask (taskName) {
    await page.removeTask(taskName)
  }

  async function doesNotHaveTask (taskName) {
    expect(await page.content).not.toContain(taskName)
  }

  async function addTask (taskName) {
    await page.addTask(taskName)
  }

  async function hasTaskNamed (taskName) {
    expect(await page.content).toContain(taskName)
  }
})
