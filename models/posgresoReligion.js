import mongoose from "mongoose";

const progReligionSchema = mongoose.Schema({
    correo: { type: String },
    pagina: { type: String }
  });

const ProgeRe1 = mongoose.model("ProgresoRe1", progReligionSchema);
export default ProgeRe1;
