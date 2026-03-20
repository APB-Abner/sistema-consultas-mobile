import { useState } from "react";
import { Especialidade } from "./src/types/especialidade";
import { Paciente } from "./src/types/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

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
    data: new Date(2026, 2, 28),
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
      <Text style={styles.titulo}>Sistema de Consultas</Text>
      <View style={styles.card}>
        <Text style={styles.texto}>Paciente: {consulta.paciente.nome}</Text>
        <Text style={styles.texto}>Médico: {consulta.medico.nome}</Text>
        <Text style={styles.texto}>Data: {formatarData(consulta.data)}</Text>
        <Text style={styles.texto}>Valor: {formatarValor(consulta.valor)}</Text>
        <Text style={styles.texto}>Status: {consulta.status}</Text>

        {consulta.status === "agendada" ? (
          <View style={styles.botao}>
            <Button title="Confirmar Consulta" onPress={confirmarConsulta} color="#d91919" />
          </View>
        ) : (
          <Text style={styles.statusConfirmado}>Consulta confirmada</Text>
        )}
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    color: "#111827",
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "80%",
    padding: 20,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    gap: 8,
  },
  texto: {
    color: "#111827",
    fontSize: 16,
  },
  botao: {
    marginTop: 12,
  },
  statusConfirmado: {
    marginTop: 12,
    color: "#047857",
    fontWeight: "bold",
  },
});
