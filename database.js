const mariadb = require("mariadb")
const pool = mariadb.createPool({

	host: "svc.gksl2.cloudtype.app",
	user: "root",
	password: "123qwe",
  port :32710,
	connectionLimit: 5,
  database:"login"
})

module.exports = {
	async run(query, params) {
		return new Promise(resolve => {
			pool
				.getConnection()
				.then(conn => {
					conn
						.query(query, params)
						.then(rows => {
							resolve(rows)
						})
						.catch(err => {
							//handle error
							console.log(err)
							conn.end()
						})
				})
				.catch(err => {
					//not connected
				})
		})
	}
}

