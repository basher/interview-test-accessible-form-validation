/* eslint-disable @typescript-eslint/no-explicit-any */

export default class ProcessUsers {
    private form: HTMLFormElement;

    constructor(form: HTMLFormElement) {
        this.form = form;

        this.init();
    }

    public static start(): void {
        const forms = document.querySelectorAll(
            '[data-action="process-users"]',
        );

        [...(forms as any)].forEach((form) => {
            const instance = new ProcessUsers(form);
            return instance;
        });
    }

    private init(): void {
        this.form.addEventListener('submit', () => this.handleSubmit());
        this.form.addEventListener('formdata', (e: FormDataEvent) =>
            this.handleFormData(e),
        );
    }

    private handleSubmit(): void {
        if (this.form.checkValidity()) {
            new FormData(this.form);
        }
    }

    private handleFormData(e: FormDataEvent): void {
        console.log('formdata fired', e.formData);
    }
}
