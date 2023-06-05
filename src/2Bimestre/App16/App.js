import React, { useEffect, useState } from "react";
import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, StatusBar} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import { styles } from './style';

const db = SQLite.openDatabase("listaCompras.db");

const App = () => {
  const [qtd, setQtd] = useState("");
  const [produto, setProduto] = useState("");
  const [listaCompra, setListaCompra] = useState([]);

  useEffect(() => {
    createTables();
    getListaCompra();
  }, []);

  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS listaCompra (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          qtd INT,
          nome VARCHAR(20)
        )`,
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

  const incluirLista = () => {
    if (!qtd) {
      alert("Coloque algo no campo quantidade");
      return false;
    }
    if (!produto) {
      alert("Coloque algo no campo produto");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO listaCompra (qtd, nome) VALUES (?, ?)`,
        [qtd, produto],
        () => {
          console.log(`${produto} Produto adicionado com sucesso!`);
          getListaCompra();
          setQtd("");
          setProduto("");
        },
        error => {
          console.log("Erro ao inserir um produto: " + error.message);
        }
      );
    });
  };

  const deletarProduto = (id) => {
    alert("Produto Excluído.")
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM listaCompra WHERE id = ?`,
        [id],
        () => {
          console.log(`Produto com id ${id} acrescentado 1`);
          getListaCompra();
        },
        error => {
          console.log("Erro ao deletar o acrescentar: " + error.message);
        }
      );
    });
  };

  const acrescentarProduto = (id) => {
    db.transaction(txn => {
      txn.executeSql(
        `UPDATE listaCompra SET qtd = qtd + 1 WHERE id = ?`,
        [id],
        () => {
          console.log(`Produto com id ${id} deletado`);
          getListaCompra();
        },
        error => {
          console.log("Erro ao deletar o produto: " + error.message);
        }
      );
    });
  };

const decrementarProduto = (id) => {
  db.transaction(txn => {
    txn.executeSql(
      `SELECT qtd FROM listaCompra WHERE id = ?`,
      [id],
      (_, res) => {
        if (res.rows.length >= 1) {
          const qtd = res.rows.item(0).qtd;
          if (qtd > 1) { 
            txn.executeSql(
              `UPDATE listaCompra SET qtd = qtd - 1 WHERE id = ?`,
              [id],
              () => {
                console.log(`Produto com id ${id} decrementado 1`);
                getListaCompra();
              },
              error => {
                console.log("Erro ao decrementar o produto: " + error.message);
              }
            );
          } else {
            alert("Não é possível decrementar a quantidade do produto abaixo de 1.");
          }
        }
      },
      error => {
        console.log("Erro ao obter a quantidade do produto: " + error.message);
      }
    );
  });
};


  const getListaCompra = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM listaCompra`,
        [],
        (_, res) => {
          console.log("Produtos lidos com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, qtd: item.qtd, nome: item.nome});
            }
            setListaCompra(results);
          } else {
            setListaCompra([]);
          }
        },
        error => {
          console.log("Erro ao obter os produtos: " + error.message);
        }
      );
    });
  };

  const renderListaCompra = ({ item }) => {
    return (
      <View style={styles.itemProduto}>
        <View style={styles.itemProdutoTextContainer}>
          <Text style={styles.itemProdutoText}>{item.nome}</Text>
          <Text style={styles.itemQtdText}>{item.qtd} {item.qtd > 1 ? 'unidades' : 'unidade'}</Text>
        </View>

        <View style={styles.itemOpcoes}>
          

          <View style={styles.itemTarefaDeleteContainer}>
            <TouchableOpacity onPress={() => deletarProduto(item.id)} style={styles.itemTarefaDelete}>
              <FontAwesome name="trash" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

return (
  <View style={styles.container}>
    <StatusBar backgroundColor="transparent" />

    <View style={styles.title}>
      <View style={styles.titlePage}>
        <Text style={styles.textTitlePage1}>Lista de</Text>
        <Text style={styles.textTitlePage2}>Compras</Text>
      </View>
    </View>
    
    <View style={styles.page}>
      <View style={styles.divInputProduto}>
        <TextInput
          keyboardType="numeric"
          placeholder="Qtd"
          value={qtd}
          maxLength={2}
          onChangeText={setQtd}
          style={styles.inputQtd}
        />

        <TextInput
          placeholder="Produto"
          value={produto}
          maxLength={20}
          onChangeText={setProduto}
          style={styles.inputProduto}
        />

        <TouchableOpacity onPress={incluirLista} style={styles.btnInputTarefa}>
          <Text style={styles.textBtnTarefa}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <ScrollView style={styles.listTarefa}>
          <FlatList
            data={listaCompra}
            renderItem={renderListaCompra}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      </View>
    </View>
  </View>
);
};

export default App;