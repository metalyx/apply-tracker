const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        ok: 'ok',
    });
});

app.listen(5001, () => {
    console.log('server started on port 5001');
});

// 1. Create an application (i.e. click on certain control on frontend)
// 2. Get all application for current user for current day
// 3. Get all application for current user for current month
// 4. Get all application for current user for all time

// 5. Remove the last added application of this type
