import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter', () => {

  describe('render', function () {
    const wrapper = mount(Counter);

    test('the correct markup', () => {
      expect(wrapper.html()).toContain('<span class="count">0</span>');
    });

    test('has a button', () => {
      expect(wrapper.contains('button')).toBe(true);
    });

    test('correctly', () => {
      expect(wrapper.element).toMatchSnapshot();
    })
  });

  describe('Click event', function () {
    test('should increase count', () => {
      const wrapper = mount(Counter);
      wrapper.find('button').trigger('click');
      expect(wrapper.html()).toContain('<span class="count">1</span>');
    });

    test('render correctly', () => {
      const wrapper = mount(Counter);
      wrapper.find('button').trigger('click');
      expect(wrapper.element).toMatchSnapshot();
    });

    test('should should increase count', () => {
      const wrapper = mount(Counter);
      wrapper.find('button').trigger('click');
      expect(wrapper.vm.count).toBe(1);
    });
  });
});
