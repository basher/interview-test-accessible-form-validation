import ProcessUsers from './process-users';

describe('Process users', () => {
    document.body.innerHTML = `
        <form data-module="form-validate" data-action="process-users">
            <div class="form__field">
                <label for="name">Name</label>
                <input type="text" id="name" value="test" required />
            </div>
            <div class="form__field">
                <label for="dob-month">Month</label>
                <select id="dob-month" required>
                    <option value="January">January</option>
                </select>
            </div>
            <div class="form__field">
                <label for="dob-year">Year</label>
                <input type="number" id="dob-year" value="2000" required>
            </div>
        </form>

        <table>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date of birth</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody data-target="process-users"></tbody>
        </table>
    `;

    const form = document.querySelector(
        '[data-module="form-validate"]',
    ) as HTMLFormElement;

    ProcessUsers.start();

    test('Form submits valid data', () => {
        form.submit();
        expect(form.checkValidity()).toBeTruthy();
    });
});
