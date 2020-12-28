const PeopleModel = require("../model/peopleModel");

module.exports = {
	index: function (req, res) {
		PeopleModel.get(req.con, function (err, rows) {
			res.render("people/index", { data: rows });
		});
	},

	create: function (_, res) {
		res.render("people/create");
	},

	store: function (req, res) {
		PeopleModel.create(req.con, req.body, function (err) {
			res.redirect("/people");
		});
	},

	edit: function (req, res) {
		PeopleModel.getById(req.con, req.params.id, function (err, rows) {
			res.render("people/edit", { data: rows[0] });
		});
	},

	update: function (req, res) {
		PeopleModel.update(req.con, req.body, req.params.id, function (err) {
			res.redirect("/people");
		});
	},

	destroy: function (req, res) {
		PeopleModel.destroy(req.con, req.params.id, function (err) {
			res.redirect("/people");
		});
	},
};
