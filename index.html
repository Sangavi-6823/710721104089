<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Average Calculator</title>
</head>

<body>
    <h1>Average Calculator</h1>
    <form id="averageForm">
        <label for="number_id">Number ID:</label>
        <input type="text" id="number_id" name="number_id" placeholder="Enter number ID (p, f, e, r)" required>
        <button type="submit">Calculate Average</button>
    </form>

    <div id="result"></div>

    <script>
        document.getElementById('averageForm').addEventListener('submit', async function (event) {
            event.preventDefault();
            const numberId = document.getElementById('number_id').value;

            try {
                const response = await fetch(`/numbers/${numberId}`);
                if (!response.ok) {
                    throw new Error('Invalid response from server');
                }
                const data = await response.json();
                document.getElementById('result').innerText = `Average: ${data.average}`;
            } catch (error) {
                console.error('Error:', error);
                document.getElementById('result').innerText = 'Error occurred. Please try again.';
            }
        });
    </script>
</body>

</html>
