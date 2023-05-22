import { Router } from "express";
import subject from "../database/subject.js";
import { index ,create,store, show,edit,update} from "../controller/subjectcont.js";
const router=new Router();
router.get('/',index)
router.get('/create',create)
router.post('/',store)
router.get('/:_id',show)
router.get('/:_id/edit',edit)
router.post('/:_id',update)
export default router;