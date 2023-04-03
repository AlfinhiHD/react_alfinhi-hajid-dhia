import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "../../components/Form/Form";

test("product name input can receive text input and display it on the page", () => {
    const { getByLabelText, getByText } = render(<Form />);
  
    const productNameInput = getByLabelText("Product Name");
    const submitButton = getByText("Submit");
  
    fireEvent.change(productNameInput, { target: { value: "Test Product" } });
    fireEvent.click(submitButton);
  
    expect(window.alert).toHaveBeenCalledWith("Product Name: Test Product");
});
