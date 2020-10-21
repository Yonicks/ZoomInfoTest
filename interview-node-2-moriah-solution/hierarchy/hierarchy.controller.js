/**for step 1 the code on this page should look as follows (or some version of it)*/

// const dbService = require('../db/db.service');
//
//
// function getHierarchyForId(id, items = []) {
//    dbService.getHierarchyItemById(id).then(hierarchyItem => {
//       items.push(hierarchyItem.name);
//       if (hierarchyItem.level !== 1) {
//          return getHierarchyForId(hierarchyItem.parentMemberId, items);
//       }
//       items.splice(0,1);
//       console.log(items.reverse().join(" -> "));
//    })
// }
//
//
// const id = 9;
// getHierarchyForId(id);



/**for step 2 the code on this page should be changed to look as follows*/

// const dbService = require('../db/db.service');
//
// function getHierarchyForId(id, items = []) {
//    return dbService.getHierarchyItemById(id).then(hierarchyItem => {
//       items.push(hierarchyItem.name);
//       if (hierarchyItem.level !== 1) {
//          return getHierarchyForId(hierarchyItem.parentMemberId, items);
//       }
//       items.splice(0,1);
//       return items.reverse().join(" -> ");
//    })
// }
//
// module.exports = {
//    getHierarchyForId
// };

/**for step 3 the code on this page *can* be changed to look as follows*/

// const hierarchyService = require('./hierarchy.service');
//
// function getHierarchyForId(id) {
//    return hierarchyService.getHierarchyForId(id).then(hierarchyItems => {
//       hierarchyItems.splice(0,1);
//       return hierarchyItems.reverse().map(item => item.name).join(" -> ");
//    })
// }
//
// module.exports = {
//    getHierarchyForId
// };


/**
 * the candidate will probably need to change the backend ep
 * to this in order to return the ids of the hierarchy member, or they will need to create a new
 * ep to return the array straight from hierarchyService.getHierarchyForId
 * */

const hierarchyService = require('./hierarchy.service');

function getHierarchyForId(id) {
   return hierarchyService.getHierarchyForId(id).then(hierarchyItems => {
      return hierarchyItems.map(item => {
         return {name: item.name, id: item.memberId}
      });
   });
}

module.exports = {
   getHierarchyForId
};
