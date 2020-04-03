const handlebars = require('hbs')

handlebars.registerHelper('getRowColor', (status) => {
  switch (status) {
    case 'Just Arrived':
      return 'danger'
    case 'Reviewed and Approved':
      return 'info'
    case 'Started Printing':
      return 'warning'
    case 'Ready for Pickup':
      return 'active'
  }
})

handlebars.registerHelper('changeStatusName', (status) => {
  switch (status) {
    case 'Just Arrived':
      return 'Submitted'
    case 'Reviewed and Approved':
      return 'Reviewed and Approved'
    case 'Started Printing':
      return 'Printing'
    case 'Ready for Pickup':
      return 'Ready for Pickup'
  }
})

module.exports = handlebars