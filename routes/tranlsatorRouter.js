const express = require('express');
const router = express.Router();
const translator = require('../src/Translateor/translator')
const translatorUtils = require('../src/Translateor/translatorUtils')
const Utils = require('../src/Utils')


router.use(translatorUtils.validateRequest)
router.use(Utils.isRequestValid)


router.route('/')
    .get((req, res, next) => {
        try {
            let resault = translator.getDictionaries()
            res.send(resault)
            res.end()
        } catch (error) {
            next(error)
        }
    })


router.route('/:dictionaryName')
    .get((req, res, next) => {
        try {
            let resault = translator.getAllItems(req.params.dictionaryName)
            res.send(resault)
            res.end()
        } catch (error) {
            next(error)
        }
    })
    .post((req, res, next) => {
        try {
            let resault = translator.getItem(req.params.dictionaryName, req.body.query, req.body.lang)
            res.send(resault)
            res.end()
        } catch (error) {
            next(error)
        }
    })
module.exports = router;