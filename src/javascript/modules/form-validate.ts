export default class FormValidate {
    private form: HTMLFormElement;
    private errorFieldClass: string;
    private errorMsgClass: string;

    constructor(form: HTMLFormElement) {
        this.form = form;
        this.errorFieldClass = 'form__field--has-error';
        this.errorMsgClass = 'form__error';

        this.init();
    }

    public static start(): void {
        const forms = document.querySelectorAll(
            '[data-module="form-validate"]',
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [...(forms as any)].forEach((form) => {
            const instance = new FormValidate(form);
            return instance;
        });
    }

    private init(): void {
        this.initFormValidate();
        this.form.addEventListener('submit', (e: Event) =>
            this.handleSubmit(e),
        );
        this.form.addEventListener(
            'blur',
            (e: Event) => {
                this.handleBlur(e);
            },
            true,
        );
    }

    private initFormValidate(): void {
        // Prevent native HTML5 validation.
        this.form.noValidate = true;
    }

    private handleSubmit(e: Event): void {
        if (!this.form.checkValidity()) {
            e.preventDefault();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [...(this.form.elements as any)].forEach((field) => {
                if (!field.checkValidity()) {
                    this.showError(field);
                }
            });

            // Focus on 1st error.
            const firstError = this.form.querySelector(
                '[aria-invalid]',
            ) as HTMLElement;
            firstError?.focus();
        }
    }

    private handleBlur(e: Event): void {
        // Need to use 'any' type as 'checkValidity' & 'type' properties do not exist on 'HTMLElement'.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const field = e.target as any;

        // If field is valid, remove any errors.
        if (field?.checkValidity()) {
            if (field.type === 'submit' || field.type === 'reset') {
                return;
            }
            this.removeError(field);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private showError(field: any): void {
        const errorMsg = document.createElement('span');
        const fieldWrapper = field.closest('.form__field');

        errorMsg.classList.add(this.errorMsgClass);
        errorMsg.id =
            field.name !== '' ? `${field.name}-error` : `${field.id}-error`;
        errorMsg.textContent = field.validationMessage;

        fieldWrapper?.classList.add(this.errorFieldClass);
        // Only add 1 error msg per field (e.g. a group of radio buttons).
        if (!fieldWrapper?.querySelector(`#${errorMsg.id}`)) {
            fieldWrapper?.appendChild(errorMsg);
        }

        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorMsg.id);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private removeError(field: any): void {
        const fieldWrapper = field.closest('.form__field');
        const errorMsg = fieldWrapper.querySelector(`.${this.errorMsgClass}`);

        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
        fieldWrapper?.classList.remove(this.errorFieldClass);
        errorMsg?.remove();
    }
}
