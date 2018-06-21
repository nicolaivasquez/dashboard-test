import React from 'react';
import {shallow} from 'enzyme';
import Process from './Process';

describe('Process component', () => {

  let component;
  const mockProps = {
    id: 1,
    name: 'FooBar'
  }

  beforeEach(() => {
    component = shallow(<Process
      {...mockProps}
    />)
  });

  it('should have data and metrics objects in state', () => {
    const state = component.state();

    expect(state.data).toBeDefined();
    expect(state.metrics).toBeDefined();
  });

  it('should clear data array on reset', () => {
    expect(component.state().data.length).toBeGreaterThan(0);

    component.instance().handleReset();
    expect(component.state().data.length).toEqual(0);
  });

});
