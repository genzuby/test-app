import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from '../../testUtil';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'test header',
        desc: 'test desc',
      };
      wrapper = setUp(props);
    });
    it('should render without errors', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    });

    it('should render h1', () => {
      const component = findByTestAttr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    it('should render desc', () => {
      const component = findByTestAttr(wrapper, 'desc');
      expect(component.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('should not render', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
