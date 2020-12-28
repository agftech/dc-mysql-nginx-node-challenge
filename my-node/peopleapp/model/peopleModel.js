module.exports = {

	get: function (con, callback) {
		con.query("SELECT * FROM people", callback);
	},

	getById: function (con, id, callback) {
		con.query(`SELECT * FROM people WHERE id = ${id}`, callback);
	},

	create: function (con, data, callback) {
		con.query(
			`INSERT INTO people SET 
      name = '${data.name}'`,
			callback
		);
	},

	update: function (con, data, id, callback) {
		con.query(
			`UPDATE people SET 
      name = '${data.name}'
      WHERE id = ${id}`,
			callback
		);
	},

	destroy: function (con, id, callback) {
		con.query(`DELETE FROM people WHERE id = ${id}`, callback);
	},
};
