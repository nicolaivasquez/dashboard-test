const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//routes
app.get('/', (req, res) => {
    res.send('Dashboard server');
});

const process = (id, name) => ({
    id,
    name,
    data: []
});
let processes = [
    process(1, 'Foo'),
    process(2, 'Bar')
];

app.route('/processes')
    .get((req, res) => {
        res.send(processes);
    })
    .post((req, res) => {
        const id = processes.length === 0 ? 1 : processes[processes.length - 1].id + 1;
        const newProcess = process(id, req.body.name);
        processes = [
            ...processes,
            newProcess,
        ];
        res.status(201).send(newProcess);
    });

app.route('/processes/:processId')
    .put((req, res) => {
        const targetProcess = processes.find((process) => process.id.toString() === req.params.processId.trim());
        if (!targetProcess) {
          res.send(404);
        } else {
          processes = processes.map((process) => {
            if (process.id.toString() === req.params.processId.trim()) {
              return {
                ...process,
                name: req.body.name,
              }
            }
            return process;
          })
          res.send(200);
        }

    })
    .delete((req, res) => {
        console.log(req.params);
        const filteredProcesses = processes.filter((process) => process.id.toString() !== req.params.processId.trim());
        if (processes.length === filteredProcesses.length) {
            res.status(404).send('Process not found');
        } else {
            processes = filteredProcesses;
            res.send(204);
        }
    })

app.listen(PORT, HOST);
console.log(`Running on ${PORT}:${HOST}`);
