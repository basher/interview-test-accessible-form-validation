import ProcessUsers from './process-users';

describe('Process users', () => {
    document.body.innerHTML = `
        <form data-module="form-validate" data-action="process-users">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value="test" required />

            <label for="dob-month">Month</label>
            <select id="dob-month" name="dob-month" required>
                <option value="January">January</option>
            </select>

            <label for="dob-year">Year</label>
            <input type="number" id="dob-year" name="dob-year" value="2000" required>
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
        expect(form.checkValidity()).toBe(true);
    });
});
