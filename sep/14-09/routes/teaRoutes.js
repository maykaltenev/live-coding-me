import express from "express";
import { authenticate } from "../middleware/authenticateUser.js";
import { checkValidId } from "../middleware/validation.js";
const router = express.Router();

const teas = [
    { id: 1, name: 'Green Tea' },
    { id: 2, name: 'Oolong Tea' },
    { id: 3, name: 'Sencha Tea' },
    { id: 4, name: 'Bio Tea' },
]
router.get('/', authenticate, (req, res) => {
    return res.status(200).json(teas)
});
router.get('/:id', checkValidId, (req, res) => {
    const teaId = req.params.id;
    const tea = teas.find(tea => tea.id == teaId)
    if (!tea) {
        return res.status(404).json(`Tea with ${teaId} is not found`)
    } else {
        return res.status(200).json({ teaId, tea });
    }
});
router.post('/new', (req, res) => {
    const newId = Math.max.apply(Math, teas.map(tea => tea.id));
    const { name } = req.body;
    const newTea = {
        id: newId,
        name: name
    }
    teas.push(newTea);

    return res.status(200).json(teas)
})


export default router;