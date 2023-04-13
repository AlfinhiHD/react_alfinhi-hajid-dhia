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

     //test form product name sesuai dengan input
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

     //test input tidak boleh kosong
     test("Should show Error if formfield empty ", async () => {
          render(
               <BrowserRouter>
                    <Provider store={store}>
                         <Form />
                    </Provider>
               </BrowserRouter>
          );
          const submitButton = screen.getByText("Submit")
          fireEvent.click(submitButton);
          await waitFor(() => {
            expect(
              screen.getByText("The product name field must be filled in")
            ).toBeInTheDocument();
            expect(
              screen.getByText("The product category field must be filled in")
            ).toBeInTheDocument();
            expect(screen.getByText("The image of product field must be filled in")).toBeInTheDocument();
            expect(
              screen.getByText("The product freshness field must be filled in")
            ).toBeInTheDocument();
            expect(
              screen.getByText("The additional description field must be filled in")
            ).toBeInTheDocument();
            expect(
              screen.getByText("The product price field must be filled in")
            ).toBeInTheDocument();
          });
     });

     //test input symbol pada product name
     test("Product Name Should not contain symbol ", async () => {
          render(
            <BrowserRouter>
              <Provider store={store}>
                <Form />
              </Provider>
            </BrowserRouter>
          );
          const input = screen.getByLabelText("Product Name");
          fireEvent.change(
               input,
               { target: { value: "#-+~@!$$%^&*(" } }
          );
          const submitButton = screen.getByText("Submit")
          fireEvent.click(submitButton);
          await waitFor(() => {
               expect(
                 screen.getByText("Name must not contain symbols")
               ).toBeInTheDocument();
          });
     });

     test("Product Name must be at most 25 characters", async () => {
          render(
            <BrowserRouter>
              <Provider store={store}>
                <Form />
              </Provider>
            </BrowserRouter>
          );
          const input = screen.getByLabelText("Product Name");
          fireEvent.change(input, { target: { value: "B".repeat(26) } });
          const submitButton = screen.getByText("Submit")
          fireEvent.click(submitButton);
          await waitFor(() => {
            expect(
              screen.getByText("Product Name must not exceed 25 characters")
            ).toBeInTheDocument();
          });
        });
})