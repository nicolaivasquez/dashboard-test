import React from 'react';
import ProcessList from './ProcessList';
import {shallow} from 'enzyme';
import Process from './Process';

describe('ProcessList component', () => {

  let component;
  const mockProcesses = [
    {id: 1, name: 'Foo'},
    {id: 2, name: 'Bar'}
  ]

  beforeEach(() => {
    component = shallow(<ProcessList processes={mockProcesses}/>)
  });

  it('should render Process components for each item in props', () => {
    const ProcessComponents = component
      .find(Process);

    expect(ProcessComponents.length).toEqual(mockProcesses.length);
  });

});
