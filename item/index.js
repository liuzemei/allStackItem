const DB = require('../db')

class Item extends DB {
  constructor() {
    super()
  }
  async test({ user_id, full_name, phone }) {
    return await this.add_user({ user_id, full_name, phone })
  }
}


module.exports = new Item()

