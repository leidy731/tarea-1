import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MiPrimerContratoModule", (m) => {
  const MiPrimerContrato = m.contract("MiPrimerContrato");

  m.call(MiPrimerContrato, "cambiarNombre", ["Leidy"]);

  return { MiPrimerContrato };
});
