import Page from './page'

class HomePage extends Page {
  async addTask (taskName) {
    await Page.browser.element('#new-task-name').setValue(taskName)
    await Page.browser.element('#add-task-button').click()
  }

  get content () {
    return Page.browser.getText('body')
  }

  async removeTask (taskName) {
    await Page.browser
      .element('td=' + taskName)
      .element('..')
      .element('button.remove-button')
      .click()
  }
}

export default new HomePage()
