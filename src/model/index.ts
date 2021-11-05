import { Sequelize, QueryTypes } from 'sequelize'

import Config from '../../config/dbConfig'

const { hccmkDB, yoxiDB } = Config

export const hccmkDBSQL = new Sequelize(hccmkDB.database, null, null, hccmkDB)
export const yoxiDBSQL = new Sequelize(yoxiDB.database, null, null, yoxiDB)

export const testDBConnection = async seql => {
  try {
      await seql.authenticate()
      console.log('Database connection has been established successfully.')
  } catch (err) {
      console.error('Unable to connect to the database:', err)
  }
}
