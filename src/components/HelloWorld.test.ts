import {render} from "@testing-library/vue";
import HelloWorld from "./HelloWorld.vue";
import {expect} from "vitest";

test('it should work', () => {
    const {getByText, getByRole} = render(HelloWorld, {
        props: {
            msg: "Coucou"
        }
    })

    getByText("Coucou")
    const button: HTMLButtonElement = getByRole('button')
    expect(button.type).equals("button")
})