import page from './home-page'

describe('shnoodo', function () {
  it('is able to add a task', async function () {
    await page.open()

    const result = await page.title

    expect(result).toEqual('Hello Shah')
  })
})
