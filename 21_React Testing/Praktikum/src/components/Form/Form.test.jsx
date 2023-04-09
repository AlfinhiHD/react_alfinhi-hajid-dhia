import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { screen, fireEvent, waitFor, render } from "@testing-library/react";
import { test, describe, expect } from "vitest";

import store from '../../redux/store'
import Form from "./Form";

/**
 * @vitest-environment jsdom
 */

describe('Form', () => {

     /* Testing Product Name dapat menerima input teks dan menampilkannya di halaman. */
     test("should input the text for the product name and display it properly", () => {
          render(
               <BrowserRouter>
                    <Provider store={store}>
                         <Form />
                    </Provider>
               </BrowserRouter>
          );

          const input = screen.getByLabelText("Product Name")
          fireEvent.change(
               input,
               { target: { value: "Sabun Mandi" } }
          )
          expect(input.value).toBe("Sabun Mandi")
     })
})