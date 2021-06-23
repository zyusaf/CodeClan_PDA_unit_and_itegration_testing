import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should add 1 to 4 and equal 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator_add');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    addButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subract 4 from 7 and equal 3', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const subtractButton = container.find('#operator-subtract');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtractButton.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should multiply 3 by 5 and equal 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiplyButton.simulate('click');
    button5.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });
  
  it('should concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button5 = container.find('#number5');
    const button7 = container.find('#number7');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button5.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('2517');
  });

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const button8 = container.find('#number8');
    const button5 = container.find('#number5');
    const addButton = container.find('#operator_add');
    const subtractButton = container.find('#operator-subtract');
    const multiplyButton = container.find('#operator-multiply');
    const divideButton = container.find('#operator-divide');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    multiplyButton.simulate('click');
    button8.simulate('click');
    divideButton.simulate('click');
    button4.simulate('click');
    addButton.simulate('click');
    button5.simulate('click');
    subtractButton.simulate('click');
    button7.simulate('click')
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('2');
  });

  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.find('#number2');
    const button8 = container.find('#number8');
    const button5 = container.find('#number5');
    const addButton = container.find('#operator_add');
    const multiplyButton = container.find('#operator-multiply');
    const equalsButton = container.find('#operator-equals');
    const clearButton = container.find('#clear');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    multiplyButton.simulate('click');
    button8.simulate('click');
    addButton.simulate('click');
    button5.simulate('click');
    clearButton.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('16');
  });
})
