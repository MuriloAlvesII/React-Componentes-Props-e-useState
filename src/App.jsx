import { useState } from "react";

import Saudacao from "./components/Saudacao";
import Perfil from "./components/Perfil";
import Contado from "./components/Contador";
import Interruptor from "./components/Interruptor";

function App(){
  return(
    <div>
      <Saudacao />
      {/* Questão 2 — Passando dados com props */}
      <Perfil nome="Maria" />
      <Perfil nome="João" />
      <Perfil nome="Murilo" />
      {/* Questão 3 — Meu primeiro estado (useState) */}
      <Contado />
      {/* Questão 4 — O interruptor (estado com verdadeiro/falso) */}
      <Interruptor />
    </div>
  );
}

export default App;