import mongoose from "mongoose";

const progArquicteraSchema = mongoose.Schema({
    correo: { type: String },
    pagina: { type: String }
  });

const ProgeArq1 = mongoose.model("ProgresoArq1", progArquicteraSchema);
export default ProgeArq1;
