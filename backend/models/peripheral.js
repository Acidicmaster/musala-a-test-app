 import mongoose from "mongoose";

const PeripheralSchema = new mongoose.Schema({
    uid: {
        type: Number,
      },
  
    vendor: {
      type: String,
    },
    
    date_created:{
      type : Date,
    
    },
    status:{
        type :Boolean,
      
      },
    gateway:{
      type : mongoose.Schema.Types.ObjectId,
      ref: "Gateway"
  
    },
  
  },
  {
      timestamps: true
  }
  
  );

const peripheral = mongoose.model("Peripheral", PeripheralSchema);

export default peripheral;
  
