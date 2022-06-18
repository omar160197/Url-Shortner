const Model = require("../models/Model");

// controllers for smart link shortener service
const controller = {
  get_single_short_link: (req, res) => {
    Model.findOne({ slug: req.params.slug }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },

  get_all_short_links: (req, res) => {
    Model.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },

  add_new_short_link: (req, res) => {
    const slug = Math.random().toString(36).substring(7);
    const data = new Model({
        slug,
        url: req.body.url,
    });
    data.save((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({link : `http://localhost:8000/api/${slug}`});
        }
    });
  },

  update_short_link: (req, res) => {
    Model.findOneAndUpdate({ slug: req.params.slug }, req.body, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  },

  delete_short_link: (req, res) => {
    Model.findOneAndDelete({ slug: req.params.slug }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send("data deleted");
      }
    });
  },
};

module.exports = controller;
