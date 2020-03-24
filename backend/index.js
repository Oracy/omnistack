const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return  res.json({code: 200,
                    evento: 'Omistack',
                    aluno: 'Oracy'});
});

app.listen(3333, () => {
    console.log(`Server started on port 3333`);
});
