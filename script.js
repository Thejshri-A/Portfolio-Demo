document.addEventListener('DOMContentLoaded', () => {
    const sheetUrl = 'https://docs.google.com/spreadsheets/d/1wjdevRV2O3MNtAhqyAxV-sEOkXrxW2KDjpkizBdBXlQ/pub?output=csv';

    fetch(sheetUrl)
        .then(response => response.text())
        .then(csvText => {
            // Parse CSV data
            const rows = csvText.split('\n').slice(1); // Skip the header row

            let usersHtml = '';

            rows.forEach(row => {
                const columns = row.split(',');

                const name = columns[1];
                const age = columns[2];

                usersHtml += `
                    <div class="user">
                        <h2>Name: ${name}</h2>
                        <p>Colour: ${age}</p>
                    </div>
                `;
            });

            document.getElementById('users-container').innerHTML = usersHtml;
        })
        .catch(error => console.error('Error fetching data:', error));
});
