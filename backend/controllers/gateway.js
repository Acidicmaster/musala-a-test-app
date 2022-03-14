
// Simple middleware for handling exceptions inside of async express routes
// and passing them to your express error handlers
import asyncHandler from "express-async-handler";
import GatewayModel from "../models/gateway.js";
import isIpv4Valid  from "../utils/validateIPAddress.js";



const getAllGateways = asyncHandler(async (req, res, next) => {
    let allGateway = await GatewayModel.find();
    res.status(200).json(allGateway);
  });

  const getGateway =asyncHandler( async (req, res, next) => {
    let found = await GatewayModel.findById(req.params.id);
    if (!found){
        res.status(404);
        throw new Error(`Gateway is not found with id of ${req.params.id}`)
    }
      
    res.status(200).json(found);
  });

  const createGateway = asyncHandler( async (req, res, next) => {
      var peripherals = req.body.peripherals
      var ipv4 = req.body.ipv4_address
      if(peripherals.length > 10) { res.status(400);
        throw new Error("Peripherals should not be greater than 10")}
 

      if(!isIpv4Valid(ipv4)) {
      res.status(401)
      throw new Error("IPV4 is not valid")};
     

     await GatewayModel.create(req.body).then((result) => {
        res.status(200).json(result);
    }).catch((error) => {
        res.status(500)
        throw new Error(`Error creating Gateway ${error.message}`)
     
      });
    
  });

  const getPeripherals =asyncHandler( async (req, res, next) => {
    const peripheral = await GatewayModel.findById(req.params.id).populate("peripherals");
    res.status(200).json(peripheral);
  });

  const appendPeriphals = asyncHandler(async (req, res, next) => {

   await GatewayModel.findByIdAndUpdate(req.params.id,
        { $push: { peripherals: req.body.peripherals } })
        .then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            res.status(500)
        throw new Error(`Error adding peripherals Gateway ${error.message}`)
          });
  });
  
  const deleteGateway = asyncHandler(async (req, res, next) => {
    const gateway = await GatewayModel.findById(req.params.serial_number);
  
    if (!gateway){
        res.status(401)
        throw new Error(`gateway  is not found with Id of ${req.params.id}`)}
    
  
    await gateway.remove();
    res
      .status(204)
      .send({ status: "success"});
  });


  export {
   getAllGateways,
   getGateway,
   createGateway,
   appendPeriphals,
   deleteGateway,getPeripherals
  };