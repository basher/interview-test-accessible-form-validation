export default class ProcessUsers {
    private form: HTMLFormElement;
    private formDataContainer: HTMLTableSectionElement | null;
    private alert: HTMLDivElement | null;

    constructor(form: HTMLFormElement) {
        this.form = form;
        this.formDataContainer = document.querySelector(
            '[data-target="process-users"]',
        );
        this.alert = document.querySelector('[data-alert="process-users"]');

        this.init();
    }

    public static start(): void {
        const forms = document.querySelectorAll(
            '[data-action="process-users"]',
        );

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [...(forms as any)].forEach((form) => {
            const instance = new ProcessUsers(form);
            return instance;
        });
    }

    private init(): void {
        this.form.addEventListener('submit', (e: SubmitEvent) =>
            this.handleSubmit(e),
        );
        document.addEventListener('click', (e: MouseEvent) => {
            this.handleClick(e);
        });
    }

    private handleSubmit(e: SubmitEvent): void {
        e.preventDefault();

        if (this.form.checkValidity()) {
            const formData = new FormData(this.form);
            this.handleFormData(formData);
        }
    }

    private handleFormData(formData: FormData): void {
        const tr = document.createElement('tr');

        if (this.formDataContainer) {
            let dob = '';

            for (const entry of formData.entries()) {
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

            tr.innerHTML += `
                <td>
                    <button
                        type="button"
                        class="button button--text button--negative button--small"
                        data-button="delete-user"
                    >
                        Delete user
                    </button>
                </td>
            `;

            this.formDataContainer.appendChild(tr);

            // Alert screen reader that user has been added.
            if (this.alert) {
                this.alert.innerHTML = 'User details added successfully';
            }
        }
    }

    private handleClick(e: MouseEvent): void {
        const target = e.target as HTMLElement;
        if (target.dataset.button !== 'delete-user') {
            return;
        }

        target.closest('tr')?.remove();

        // Alert screen reader that user has been deleted.
        if (this.alert) {
            this.alert.innerHTML = 'User details deleted successfully';
        }
    }
}
