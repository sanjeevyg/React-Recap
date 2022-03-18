import React from 'react';
import { CheckBox } from './checkBox';
import { render, fireEvent } from "@testing-library/react";

test("check box", () => {
    const { getByLabelText } = render(<CheckBox/>);
    const checkBox = getByLabelText(/not-checked/);
    fireEvent.click(checkBox)
    expect(checkBox.checked).toEqual(true)
})