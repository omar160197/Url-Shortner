const router = require("express").Router();
const {
  get_single_short_link,
  get_all_short_links,
  add_new_short_link,
  update_short_link,
  delete_short_link,
} = require("../controllers");

//api for smart link shortener service
router
  .get("/:slug", get_single_short_link)
  .get("/", get_all_short_links)
  .post("/", add_new_short_link)
  .put("/:slug", update_short_link)
  .delete("/:slug", delete_short_link);

module.exports = router;
