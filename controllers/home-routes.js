const router = require("express").Router();
const {
  User,
  Cookbook,
  Recipe,
  Comment,
  UserCookbook,
  Category,
} = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      // include: [{ model: Category }, { model: Comment }],
    });

    const recipes = recipeData.map((r) => r.get({ plain: true }));
    console.log(recipes);
    res.render("homepage", { recipes });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get recipe by category
router.get("/categories/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        category_id: req.params.id,
      },
    });
    if (!recipeData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get recipe by id
router.get("/:id", async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (!recipeData) {
      res.status(404).json({ message: "No recipe found with that id!" });
      return;
    }
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
