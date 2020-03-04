const pgsql = require('pg')
const SQL = require('./sql')
const DATABASE_CONFIG = {
  host: 'localhost',
  port: 5432,
  user: 'lapsed',
  password: 'abcd1234',
  database: 'shop'
}

async function query(sql, params) {
  const client = new pgsql.Client(DATABASE_CONFIG)
  await client.connect()
  const { rows } = await client.query(sql, params)
  await client.end()
  return rows
}


async function queryList(data) {
  const client = new pgsql.Client(DATABASE_CONFIG)
  await client.connect()
  let res = []
  for (let i = 0, len = data.length; i < len; i++) {
    let { sql, params } = data[i]
    const { rows } = await client.query(sql, params)
    res.push(rows)
  }
  await client.end()
  return res
}


class DB {
  constructor() {
    this.SQL = SQL
  }
  async _query(sql, params) {
    return await query(sql, params)
  }
  // users
  async add_user({ user_id, full_name, phone }) {
    return await query(this.SQL.ADD_USER, [user_id, full_name, phone])
  }
}

module.exports = DB
