
const dbService = require('../db/db.service');

function getHierarchyForId(id, items = []) {

   return dbService.getHierarchyItemById(id).then(hierarchyItem => {
      items.push(hierarchyItem);
      if (hierarchyItem.level !== 1) {
         return getHierarchyForId(hierarchyItem.parentMemberId, items);
      }
      return items;
   })
}

module.exports = {
    getHierarchyForId
};
