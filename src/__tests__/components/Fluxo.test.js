import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import api from '../../services'
import { LocateCepProvider } from '../../providers/CepProvider'
import MockAdapter from 'axios-mock-adapter'
import App from '../../App'

const mockedApi = new MockAdapter(api)


describe("testing the application flow by adding a zip code and clicking the button", () => {
	it("should show your address information", async () => {

    mockedApi.onGet('60160110')
    .replyOnce(200, {
      logradouro: "Rua Ana Bilhar",
      bairro: "Meireles",
      cidade: 'Fortaleza',
      estado: 'CE'
    },)
    
	})

    render(<LocateCepProvider> <App /> </LocateCepProvider>)  

		const cepField = screen.getByPlaceholderText("Insira o CEP");
		const buttonElement = screen.getByRole("button");
        
		fireEvent.change(cepField, { target: { value: "60160110" }})
		fireEvent.click(buttonElement)

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor( () => {

      expect(screen.getByDisplayValue('Rua Ana Bilhar')).toBeInTheDocument()

    })

})