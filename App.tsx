import { useState } from "react";
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
  descricao: "Cuidados com o coração",
};

const medico1: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true,
};

const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
  telefone: "(11) 98765-4321",
};

export default function App() {
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 2, 10),
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  function confirmarConsulta() {
    setConsulta((prev) => ({ ...prev, status: "confirmada" }));
  }

  function formatarValor(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatarData(data: Date) {
    return data.toLocaleDateString("pt-BR");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta</Text>
      <Text style={styles.texto}>Médico: {consulta.medico.nome}</Text>
      <Text style={styles.texto}>Paciente: {consulta.paciente.nome}</Text>
      <Text style={styles.texto}>Data: {formatarData(consulta.data)}</Text>
      <Text style={styles.texto}>Valor: {formatarValor(consulta.valor)}</Text>
      <Text style={styles.texto}>Status: {consulta.status}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={confirmarConsulta}
        disabled={consulta.status === "confirmada"}
      >
        <Text style={styles.botaoTexto}>
          {consulta.status === "confirmada" ? "Consulta confirmada" : "Confirmar consulta"}
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d91919",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 8,
  },
  titulo: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  texto: {
    color: "#fff",
    fontSize: 16,
  },
  botao: {
    marginTop: 14,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  botaoTexto: {
    color: "#d91919",
    fontWeight: "bold",
  },
});
