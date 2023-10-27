import FormValidate from './form-validate';

describe('Validate form', () => {
    document.body.innerHTML = `
        <form data-module="form-validate">
            <div class="form__field">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value="" required />
            </div>
        </form>
    `;

    const form = document.querySelector(
        '[data-module="form-validate"]',
    ) as HTMLFormElement;
    const input = form.querySelector('#name') as HTMLInputElement;

    FormValidate.start();

    test('Form has HTML5 validation disabled', () => {
        expect(form.noValidate).toBe(true);
    });

    test('Invalid input value on form submission', () => {
        form.submit();
        expect(input?.validity.valid).toBe(false);
    });
});
