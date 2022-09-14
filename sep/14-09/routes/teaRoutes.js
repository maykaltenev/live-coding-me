import express from 'express';


const router = express.Router();

const teas = [
    { id: 1, name: 'Green Tea' },
    { id: 2, name: 'Oolong Tea' },
    { id: 3, name: 'Sencha Tea' },
    { id: 4, name: 'Bio Tea' }
]

router.get('/', (req, res) => {
    return res.status(200).json(teas);
});

router.get('/:id', (req, res) => {
    const teaId = req.params.id;
    const tea = teas.find(t => t.id == teaId);

    if (!tea) {
        return res.status(404).json({ message: `Tea with id ${teaId} not found.` })
    }

    return res.status(200).json({ teaId, tea })
});
export default router;

router.post('/new', (req, res) => {
    const newId = Math.max.apply(Math, teas.map(function (tea) { return tea.id; })) + 1
    const { name } = req.body;

    const newTea = {
        id: newId,
        name: name
    }

    teas.push(newTea);

    return res.status(200).json({ teas: teas });
})