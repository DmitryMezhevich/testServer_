const Router = require('express').Router;

const tarckController = require('../../controllers/track-controller');

const router = new Router();

router.post('/fb/event', tarckController.eventFB);
router.post('/tt/event', tarckController.eventTT);
router.post('/event', tarckController.event);
router.post('/addDataPixel', tarckController.addDataPixel);
router.post('/testGood', tarckController.myTestGood);
router.post('/testError', tarckController.myTestErr);

router.get('/resource', tarckController.resource);

module.exports = router;
