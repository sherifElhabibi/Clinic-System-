const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

//create schema for Department collection
const schema = new mongoose.Schema(
  {
    _id: { type: Number },
    patientId: { type: Number, ref: "patientModel" },
    patientModel: { type: String, enum: ["doctor", "patient", "employee"], default: "patient", require: true },
    clinicId: { type: Number, ref: "clinic" },
    invoiceDate: {
      type: String, //"2016-11-05" date formate
      get: (date) => {
        return date.split("T")[0];
      },
      required: [true, " Date for invoice is required"],
      default: Date.now(),
    },
    invoiceTime: {
      type: String, //8:30=>time formate
      required: [true, " Time for invoice is required"],
    },
    status: { type: String, enum: ["unpaid", "paid", "partial"] },
    total: { type: Number },
    paymentMethod: { type: String, enum: ["Cash", "Credit Card", "Insurance Card"], default: "cash", required: true },
    paid: { type: Number },
    totalDue: { type: Number },
  },
  { _id: false }
);

schema.plugin(AutoIncrement, { id: "Invoice_id_counter", inc_field: "_id" });

//mapping: binding Schema with collection
module.exports = mongoose.model("invoice", schema);
