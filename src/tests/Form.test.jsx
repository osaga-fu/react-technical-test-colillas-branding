import { render, fireEvent, screen } from "@testing-library/react";
import Form from "../components/Form/Form";

describe("Form component", () => {
  test("The form is rendered corretly with its input fields", () => {
    render(<Form />);
    const nameInput = screen.getByLabelText("Nombre");
    const companyInput = screen.getByLabelText("Empresa");
    const emailInput = screen.getByLabelText("Email");
    const phoneInput = screen.getByLabelText("Teléfono de contacto");
    const messageInput = screen.getByLabelText("Mensaje");
    const submitButton = screen.getByText("Enviar");

    expect(nameInput).toBeTruthy();
    expect(companyInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(phoneInput).toBeTruthy();
    expect(messageInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  test("Lets you submit the form with valid data", () => {
    render(<Form />);
    const nameInput = screen.getByLabelText("Nombre");
    const companyInput = screen.getByLabelText("Empresa");
    const emailInput = screen.getByLabelText("Email");
    const phoneInput = screen.getByLabelText("Teléfono de contacto");
    const messageInput = screen.getByLabelText("Mensaje");
    const submitButton = screen.getByText("Enviar");

    fireEvent.change(nameInput, { target: { value: "Fernando Salas" } });
    fireEvent.change(companyInput, { target: { value: "La Empresa" } });
    fireEvent.change(emailInput, { target: { value: "fernando@empresa.com" } });
    fireEvent.change(phoneInput, { target: { value: "123456789" } });
    fireEvent.change(messageInput, { target: { value: "Tengo dudas" } });

    fireEvent.click(submitButton);
  });

  test("Shows error message if you use an invalid email", () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "nosoy.com" },
    });
    fireEvent.click(screen.getByText("Enviar"));

    expect(screen.getByText("Introduzca un email válido.")).toBeTruthy();
  });

  test("Shows error message if you use an invalid phone", () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText("Teléfono de contacto"), {
      target: { value: "1234" },
    });
    fireEvent.click(screen.getByText("Enviar"));

    expect(
      screen.getByText("Introduzca un número de teléfono válido.")
    ).toBeTruthy();
  });
});
