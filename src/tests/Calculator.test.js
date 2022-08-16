import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 to get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const operatoradd = container.getByTestId('operator-add');
    const operatorequals = container.getByTestId('operator-equals');
    const runningtotal = container.getByTestId('running-total')
    fireEvent.click(button1);
    fireEvent.click(operatoradd);
    fireEvent.click(button4);
    fireEvent.click(operatorequals);
    expect(runningtotal.textContent).toEqual('5')  
  })

  it('should minus 4 from 7 to get 3', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const operatorminus = container.getByTestId('operator-subtract');
    const operatorequals = container.getByTestId('operator-equals');
    const runningtotal = container.getByTestId('running-total')
    fireEvent.click(button7);
    fireEvent.click(operatorminus);
    fireEvent.click(button4);
    fireEvent.click(operatorequals);
    expect(runningtotal.textContent).toEqual('3')  
  })

  it('should multiply 3 by 5 to get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorequals = container.getByTestId('operator-equals');
    const runningtotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorequals);
    expect(runningtotal.textContent).toEqual('15');
  })

  it('should concatenate multiple number clicks', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual('35')
  })

  it('should chain multiple operator clicks', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const button9 = container.getByTestId('number9')
    const operatorMultiply = container.getByTestId('operator-multiply');
    const operatorMinus = container.getByTestId('operator-subtract')
    const operatorequals = container.getByTestId('operator-equals');
    const runningtotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(operatorMultiply);
    fireEvent.click(button5);
    fireEvent.click(operatorMinus);
    fireEvent.click(button9)
    fireEvent.click(operatorequals)
    expect(runningtotal.textContent).toEqual('6');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const operatoradd = container.getByTestId('operator-add');
    const operatorequals = container.getByTestId('operator-equals');
    const clearButton = container.getByTestId('clear')
    const runningtotal = container.getByTestId('running-total')
    fireEvent.click(button1);
    fireEvent.click(operatoradd);
    fireEvent.click(button4);
    fireEvent.click(operatorequals);
    fireEvent.click(operatoradd)
    fireEvent.click(clearButton)
    fireEvent.click(operatorequals);
    expect(runningtotal.textContent).toEqual('5')  
  })

})

