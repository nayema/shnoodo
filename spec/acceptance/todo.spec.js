import page from './home-page'

describe('shnoodo', function () {
  it('is able to add a task', async function () {
    await page.open()

    await page.addTask('some task')

    expect(await page.content).toContain('some task')
  })
})
