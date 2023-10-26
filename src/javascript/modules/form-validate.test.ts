import FormValidate from './form-validate';

jest.mock('./form-validate');

describe('Validate form', () => {
    document.body.innerHTML = `
        <form data-module="form-validate">
            <label for="name">Name</label>
            <input type="text" id="name" required />
            <button type="submit">Add user</button>
        </form>
    `;

    const form = document.querySelector(
        '[data-module="form-validate"]',
    ) as HTMLFormElement;

    test('Class should have been called once', () => {
        new FormValidate(form);
        expect(FormValidate).toHaveBeenCalledTimes(1);
    });

    test('Invalid input value on form submission', () => {
        new FormValidate(form);
        form.submit();
        const input = form.querySelector('#name') as HTMLInputElement;
        expect(input?.validity.valid).toBe(false);
    });
});
