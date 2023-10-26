import FormValidate from './form-validate';

jest.mock('./form-validate');

beforeAll(() => {
    document.body.innerHTML = `
        <form data-module="form-validate">
    `;
});

beforeEach(() => {
    FormValidate.mockClear();
});

describe('FormValidate instance', () => {
    it('should not have been called', () => {
        expect(FormValidate).not.toHaveBeenCalled();
    });

    it('should have been called once', () => {
        const form = document.querySelector('[data-module="form-validate"]');
        new FormValidate(form);
        expect(FormValidate).toHaveBeenCalledTimes(1);
    });
});
