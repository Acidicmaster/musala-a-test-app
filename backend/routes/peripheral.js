import {
    getAllPeripheral,getPeripheral,createPeripheral,
    updatePeripheral,deletePeripheral
  } from "../controllers/peripheral.js";
import express from "express";
const router = express.Router();


router.post('/', createPeripheral);

 // Retrieve all 
 router.get('/',  getAllPeripheral);

 // Retrieve a gateway with id
 
 router.get('/:id', getPeripheral);
 // 
 router.put('/:id',updatePeripheral);

 router.delete('/:id',deletePeripheral);

 export default router;