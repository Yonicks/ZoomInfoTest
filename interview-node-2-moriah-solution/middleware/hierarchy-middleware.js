const hierarchyService = require('../hierarchy/hierarchy.service');
const _ = require("lodash");

module.exports = async function (req, res, next) {

    try {

        const userId = res.locals.account.id;
        const hierarchyOfRequestedId = await hierarchyService.getHierarchyForId(req.params.id);
        const isUserInHierarchy = hierarchyOfRequestedId.find(hierarchyItem => hierarchyItem.memberId === userId);

        if (!isUserInHierarchy) {
            throw {message: "You are not authorized to view this members details", status: 401};
        }

        next();
    }
    catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);

        res.status(errCode).json({message: 'error occurred', error: errMessage});
    }

};
