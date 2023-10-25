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
        this.form.addEventListener('submit', (e: SubmitEvent) =>
            this.handleSubmit(e),
        );
        this.form.addEventListener('formdata', (e: FormDataEvent) =>
            this.handleFormData(e),
        );
    }

    private handleSubmit(e: SubmitEvent): void {
        e.preventDefault();

        if (this.form.checkValidity()) {
            new FormData(this.form);
        }
    }

    private handleFormData(e: FormDataEvent): void {
        const formDataContainer = document.querySelector(
            '[data-target="process-users"]',
        ) as HTMLTableSectionElement;
        const tr = document.createElement('tr');

        if (formDataContainer) {
            let dob = '';

            for (const entry of e.formData.entries()) {
                // Combine 3 date of birth entries into 1 string.
                switch (entry[0]) {
                    case 'dob-day':
                        dob += `${entry[1]} `;
                        break;
                    case 'dob-month':
                        dob += `${entry[1]} `;
                        break;
                    case 'dob-year':
                        dob += `${entry[1]}`;
                        tr.innerHTML += `<td>${dob}</td>`;
                        break;
                    default:
                        tr.innerHTML += `<td>${entry[1]}</td>`;
                        break;
                }
            }

            tr.innerHTML += `<td>Delete</td>`;
            formDataContainer.appendChild(tr);
        }
    }
}
