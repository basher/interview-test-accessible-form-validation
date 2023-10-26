import FormValidate from './form-validate';

jest.mock('./form-validate');

describe('Validate form', () => {
    document.body.innerHTML = `
        <form data-module="form-validate">
        </form>
    `;

    const form = document.querySelector(
        '[data-module="form-validate"]',
    ) as HTMLFormElement;

    it('should have been called once', () => {
        new FormValidate(form);
        expect(FormValidate).toHaveBeenCalledTimes(1);
    });
});
