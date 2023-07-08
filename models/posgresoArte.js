import mongoose from "mongoose";

const progArteSchema = mongoose.Schema({
    correo: { type: String },
    pagina: { type: String }
  });

const ProgeAr1 = mongoose.model("ProgresoAr1", progArteSchema);
export default ProgeAr1;
