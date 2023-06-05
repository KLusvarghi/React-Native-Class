import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import * as SQLite from 'expo-sqlite';
import { styles } from './style';
import { FontAwesome } from '@expo/vector-icons'; 

const db = SQLite.openDatabase("tarefas.db");

const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        () => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("Erro ao criar a tabela: " + error.message);
        }
      );
    });
  };

  const incluirTarefa = () => {
    if (!tarefa) {
      alert("O campo Tarefa está vazio. Preencha-o e depois adicione a Tarefa.");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        () => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa: " + error.message);
        }
      );
    });
  };

  const deletarTarefa = (id) => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        () => {
          console.log(`Tarefa com id ${id} deletada`);
          getTarefas();
        },
        error => {
          console.log("Erro ao deletar a tarefa: " + error.message);
        }
      );
    });
  };

  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas`,
        [],
        (_, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }
            setTarefas(results);
          } else {
            setTarefas([]);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas: " + error.message);
        }
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View style={styles.itemTarefa}>
        <Text style={styles.itemTarefaID}>{item.id}</Text>
        <Text style={styles.itemTarefaText}>{item.nome}</Text>
        <TouchableOpacity onPress={() => deletarTarefa(item.id)} style={styles.itemTarefaDelete}>
          <FontAwesome name="trash" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);

return (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />

    <View style={styles.titlePage}>
      <Text style={styles.textTitlePage}>Tarefas</Text>
    </View>

    <View style={styles.divInputTarefa}>
      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={styles.inputTarefa}
      />

      <TouchableOpacity onPress={incluirTarefa} style={styles.btnInputTarefa}>
        <Text style={styles.textBtnTarefa}>+</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.listTarefa}>
      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  </View>
);
};

export default App;
