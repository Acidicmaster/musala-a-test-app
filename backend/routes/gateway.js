
  import {
    getAllGateways,
    getGateway,
    createGateway,
    appendPeriphals,
    deleteGateway,getPeripherals
  } from "../controllers/gateway.js";
  import express from "express";
const router = express.Router();


router.post('/', createGateway);

 // Retrieve all 
 router.get('/',  getAllGateways);

 // Retrieve a gateway with serial number
 
 router.get('/:id', getGateway);

 router.get('/peripheral/:id',  getPeripherals);

 // 
 router.put('/:id',appendPeriphals);

 router.delete('/:id', deleteGateway);

 export default router;