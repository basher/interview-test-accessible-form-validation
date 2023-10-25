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
        this.buildResultsDOM();
        this.form.addEventListener('submit', (e: SubmitEvent) =>
            this.handleSubmit(e),
        );
        this.form.addEventListener('formdata', (e: FormDataEvent) =>
            this.handleFormData(e),
        );
    }

    private buildResultsDOM(): void {
        const formDataContainer = document.querySelector(
            '[data-target="process-users"]',
        ) as HTMLDivElement;
        const ul = document.createElement('ul');

        ul.classList.add('user-details');
        formDataContainer.appendChild(ul);
    }

    private handleSubmit(e: SubmitEvent): void {
        e.preventDefault();

        if (this.form.checkValidity()) {
            new FormData(this.form);
        }
    }

    private handleFormData(e: FormDataEvent): void {
        const formDataContainer = document.querySelector(
            '.user-details',
        ) as HTMLUListElement;
        const li = document.createElement('li');

        if (formDataContainer) {
            li.innerHTML += `<span class="sr-only">New user added</span>`;

            for (const entry of e.formData.entries()) {
                li.innerHTML += `
                    <span>
                        <span class="sr-only">${entry[0]}</span>
                        ${entry[1]}&nbsp;
                    </span>
                `;
            }

            formDataContainer.appendChild(li);
        }
    }
}
