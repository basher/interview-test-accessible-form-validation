/* eslint-disable @typescript-eslint/no-explicit-any */
import FormValidate from './form-validate';

describe('Validate form', () => {
    document.body.innerHTML = `
        <form data-module="form-validate">
            <div class="form__field">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value="" required />
            </div>
            <button type="submit">Submit</button>
        </form>
    `;

    const form = document.querySelector(
        '[data-module="form-validate"]',
    ) as HTMLFormElement;
    const input = form.querySelector('#name') as HTMLInputElement;
    const btnSubmit = form.querySelector(
        '[type="submit"]',
    ) as HTMLButtonElement;
    const formFieldHasError = input.closest('.form__field');
    const error = formFieldHasError?.querySelector(
        '.form__error',
    ) as HTMLSpanElement;

    FormValidate.start();

    test('Form has HTML5 validation disabled', () => {
        expect(form.noValidate).toBe(true);
    });

    test('Invalid input value on form submission', () => {
        form.submit();
        expect(input?.validity.valid).toBe(false);
    });

    // TODO - fix this test.
    test('Blur event on submit button returns early', () => {
        const evtBlur = jest.spyOn(FormValidate.prototype as any, 'handleBlur');
        btnSubmit.blur();

        expect(evtBlur).toHaveBeenCalled();
    });

    test('Blur event on valid input removes error', () => {
        form.submit();
        input.focus();
        input.value = 'test';
        input.blur();
        expect(error).toBeFalsy();
    });
});
