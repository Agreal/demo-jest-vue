import {mount} from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter', () => {

  test('should render correct markup when mount', () => {
    const wrapper = mount(Counter);
    expect(wrapper.vm.count).toBe(0);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('should render correct markup after click button', () => {
    const wrapper = mount(Counter);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.count).toBe(1);
    expect(wrapper.element).toMatchSnapshot();
  });
});
