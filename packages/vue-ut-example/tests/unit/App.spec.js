import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import flushPromises from 'flush-promises'
import App from '@/App.vue'

jest.mock('axios')

describe('App', function () {
  test('should render master commits list when mount App', async () => {
    axios.get.mockResolvedValue({ data: stubMasterCommits() })

    const wrapper = shallowMount(App)
    await flushPromises()

    expect(wrapper.element).toMatchSnapshot()
    const $li = wrapper.findAll('li')
    expect($li.length).toBe(3)
    expect($li.at(0).find('a').text()).toBe('1234567')
  })

  test('should render dev commits list when checked dev branch', async () => {
    axios.get
      .mockResolvedValueOnce({ data: stubMasterCommits() })
      .mockResolvedValueOnce({ data: stubDevCommits() })

    const wrapper = shallowMount(App)
    await flushPromises()
    wrapper.setData({ currentBranch: 'dev' })
    await flushPromises()

    expect(wrapper.element).toMatchSnapshot()
    const $li = wrapper.findAll('li')
    expect($li.length).toBe(3)
    expect($li.at(0).find('a').text()).toBe('1111111')
  })

  // https://stackoverflow.com/questions/54783418/vue-test-utils-jest-how-to-test-single-file-component-filter
  test('truncate', () => {
    const { truncate } = shallowMount(App).vm.$options.filters
    const result = truncate('111\n222')
    expect(result).toBe('111')
  })

  test('formatDate', () => {
    const { formatDate } = shallowMount(App).vm.$options.filters
    const result = formatDate('2017-10-13T03:07:14Z')
    expect(result).toBe('2017-10-13 03:07:14 ')
  })
})

function stubMasterCommits () {
  return [
    {
      html_url: 'html_url_0',
      sha: '1234567890',
      commit: { message: 'aaaaa', author: { name: 'aaa', date: '2017-10-13T03:07:14Z' } },
      author: { html_url: 'author_html_url' }
    },
    {
      html_url: 'html_url_1',
      sha: '1234567891',
      commit: { message: 'bbbbb', author: { name: 'bbb', date: '2017-10-13T03:07:14Z' } },
      author: { html_url: 'author_html_url' }
    },
    {
      html_url: 'html_url_2',
      sha: '1234567892',
      commit: { message: 'ccccc', author: { name: 'ccc', date: '2017-10-13T03:07:14Z' } },
      author: { html_url: 'author_html_url' }
    }
  ]
}

function stubDevCommits () {
  return [
    {
      html_url: 'html_url_0',
      sha: '1111111110',
      commit: { message: 'aaaaa', author: { name: 'aaa', date: '2017-10-13T03:07:14Z' } },
      author: { html_url: 'author_html_url' }
    },
    {
      html_url: 'html_url_1',
      sha: '1111111111',
      commit: { message: 'bbbbb', author: { name: 'bbb', date: '2017-10-13T03:07:14Z' } },
      author: { html_url: 'author_html_url' }
    },
    {
      html_url: 'html_url_2',
      sha: '1111111112',
      commit: { message: 'ccccc', author: { name: 'ccc', date: '2017-10-13T03:07:14Z' } },
      author: { html_url: 'author_html_url' }
    }
  ]
}
