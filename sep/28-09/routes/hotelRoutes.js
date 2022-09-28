import express from 'express';
import Hotel from '../models/hotel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    //selecting specific fields of our Hotel using .select()
    const hotels = await Hotel.find().select('name description');
    return res.status(200).json(hotels);
})

//GET: show the room by ID 
router.get('/rooms/byid/:id', async (req, res) => {
    //find the room with that id inside the array.
    //select specific items within the document
    const room = await Hotel.find({ 'rooms._id': req.params.id }).select('rooms.$') //positional operator $, show only the room it found in the condition.
    if (!room) {
        //we couldn't find a room with that id 
        return res.status(404).json({ Message: 'Room not found' });
    }
    //we found it! yay! let's return it.
    return res.status(200).json(room);
});

router.post('/create', async (req, res) => {

    try {
        const createdHotel = await Hotel.create({
            name: req.body.name,
            description: req.body.description,
            location: req.body.location,
            isAvailable: req.body.isAvailable,
            stars: req.body.stars
        })

        return res.status(200).json({ message: 'Hotel created', createdHotel })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});

//patch update the current hotel and add a room 
router.patch('/create-room/:id', async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
            //array.push, $push will add an object to the array 
            $push: {
                //we would like to push the following object into the rooms array.
                rooms: {
                    name: req.body.name,
                    description: req.body.description,
                    roomSize: req.body.roomSize,
                    sleeps: req.body.sleeps,
                    bedSize: req.body.bedSize,
                    view: req.body.view,
                    price: req.body.price,
                    rating: req.body.rating
                }
            }
        }, { new: true })//new means send the fully updated document
        return res.status(200).json({ message: 'Room created', updatedHotel })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});
export default router;