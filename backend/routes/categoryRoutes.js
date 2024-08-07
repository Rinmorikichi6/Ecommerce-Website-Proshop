import express from "express";
const router = express.Router();
import {
  createCategory,
  updateCategory,
  removeCategory,
  listCategory,
  readCategory,
} from "../controllers/categoryController.js";
import {
  authenticate,
  AuthorizedAdmin,
} from "../middlewares/authMiddleware.js";

router.route("/").post(authenticate, AuthorizedAdmin, createCategory);
router.route("/:categoryId").put(authenticate, AuthorizedAdmin, updateCategory);
router.route("/:categoryId").put(authenticate, AuthorizedAdmin, updateCategory);
router
  .route("/:categoryId")
  .delete(authenticate, AuthorizedAdmin, removeCategory);

router.route("/categories").get(listCategory);
router.route("/:id").get(readCategory);

export default router;
