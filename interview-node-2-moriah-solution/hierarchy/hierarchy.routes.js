const express = require('express');
const router = express.Router();
const hierarchyController = require('./hierarchy.controller');

router.get("/:id", getHierarchyById);

async function getHierarchyById(req, res, next) {
    try {
        const hierarchy = await hierarchyController.getHierarchyForId(req.params.id);
        res.status(200).send(hierarchy);
    }
    catch(error) {
        const errMessage = _.get(error, 'message', 'error occurred');
        const errCode = _.get(error, 'status', 500);
        res.status(errCode).json({message: 'error occurred', error: errMessage});
    }
}


module.exports = router;
