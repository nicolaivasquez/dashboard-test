import React from 'react';
import AddProcess from './AddProcess';
import Button from '@material-ui/core/Button';
import {shallow} from 'enzyme';

describe('AddProcess component', () => {

  let component;
  let mockProps = {
    showAddForm: false,
  }
  let handleShowAddFormMock, changeNewProcessNameMock, handleAddProcessMock;

  beforeEach(() => {
    handleAddProcessMock = jest.fn();
    handleShowAddFormMock = jest.fn();
    changeNewProcessNameMock = jest.fn();
    component = shallow(<AddProcess
      {...mockProps}
      handleAddProcess={handleAddProcessMock}
      handleShowAddForm={handleShowAddFormMock}
      changeNewProcessName={changeNewProcessNameMock}
    />)
  })

  describe('toggle add form', () => {
    it('should show add process button when show add form is set to false', () => {
      const button = component.find(Button);

      expect(button.length).toEqual(1);
    });

    it('should show add process form when show add form is set to false', () => {
      component = shallow(<AddProcess
        showAddForm={true}
        handleAddProcess={handleAddProcessMock}
        handleShowAddForm={handleShowAddFormMock}
        changeNewProcessName={changeNewProcessNameMock}
      />);

      const form = component.find('form[name="addForm"]');

      expect(form.length).toEqual(1);
    });
  })
});
