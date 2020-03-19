const router = require('express').Router();
let Watch = require('../models/watch.model');

router.route('/list/').get((req, res) => {
    Watch.find()
        .then(watches => res.json(watches))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/list/armani').get((req, res) => {
    Watch.find({ brand: "Armani" })
        .then(watches => res.json(watches))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/list/timex').get((req, res) => {
    Watch.find({ brand: "Timex" })
        .then(watches => res.json(watches))
        .catch(err => res.status(400).json('Error: ' + err));
});

//{ quantity: 10, model: "AX2105" }
router.route('/add').post((req, res) => {
    const model = req.body.model;
    const quantity = req.body.quantity;
    const brand = req.body.brand;
    const location = req.body.location;
    const url = req.body.url;



    const newWatch = new Watch({
        model,
        quantity,
        brand,
        location,
        url,
    });

    newWatch.save()
        .then(() => res.json('Watch added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Watch.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Watch.findById(req.params.id)
        .then(watch => {
            watch.model = req.body.model;
            watch.quantity = req.body.quantity;
            watch.brand = req.body.brand,
                watch.location = req.body.location;
            watch.url = req.body.url;

            watch.save()
                .then(() => res.json('Watch updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router;