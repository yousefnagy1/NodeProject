import { Router } from "express";
import department from "../database/department.js";
import { index,create,store,show,edit, update,deleteOne} from "../controller/departmentcont.js";
const router=new Router();
router.get('/',index)
router.get('/create',create)
router.post('/',store)
router.get('/:_id',show)
router.get('/:_id/edit',edit)
router.post('/:_id',update)
router.delete('/:_id',deleteOne)
export default router; 