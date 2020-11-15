const School = require("../models/school");

const { schoolValidator } = require("../validation/school");

module.exports = {
  async add(req, res) {
    await schoolValidator(req.body);

    const school = await new School(req.body).save();

    res.json({ success: school });
  },
  async getAll(req, res) {
    const schools = await School.find();

    res.json({ schools: schools });
  },
  async accept(req, res) {
    if (!req.body.id) {
      return res.status(400).json({ error: "please provide a school id" });
    }

    const school = await School.findByIdAndUpdate(req.body.id, {
      status: "accepted",
    });

    res.json({ success: school });
  },
  async reject(req, res) {
    if (!req.body.id) {
      return res.status(400).json({ error: "please provide a school id" });
    }

    const school = await School.findByIdAndUpdate(req.body.id, {
      status: "rejected",
    });

    res.json({ success: school });
  },
};
