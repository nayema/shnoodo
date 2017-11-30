import page from './home-page'

describe('shnoodo', function () {
  beforeEach(async function () {
    await page.open()
  })

  it('is able to add a task', async function () {
    await addTask('some task')

    await hasTaskNamed('some task')
  })

  async function addTask (taskName) {
    await page.addTask(taskName)
  }

  async function hasTaskNamed (taskName) {
    expect(await page.content).toContain(taskName)
  }
})
