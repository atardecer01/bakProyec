import mongoose from "mongoose";

const progJeraquiaSchema = mongoose.Schema({
    correo: { type: String },
    pagina: { type: String }
  });

const ProgeJe1 = mongoose.model("ProgresoJe1", progJeraquiaSchema);
export default ProgeJe1;
