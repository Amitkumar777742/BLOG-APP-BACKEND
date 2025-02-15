const express=require('express')
const router = express.Router();

const {createComment }= require('../controllers/commentController')

const {createPost,getAllpost}=require("../controllers/postController")
const {likePost,unlikePost}= require("../controllers/likeController")




router.post("/comment/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts",getAllpost)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)





module.exports=router;