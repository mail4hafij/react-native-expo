import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Table, Row } from "react-native-table-component";
import { APIURL, ACCESS_KEY } from "@env";

const CONTENT = {
  tableColHead: ["", "Today", "Tomorrow"],
};

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [rsp, setRsp] = useState([]);
  const now = new Date();
  const time = now.getHours() + ":" + now.getMinutes();

  useEffect(() => {
    fetch(APIURL + "/" + ACCESS_KEY)
      .then((rsp) => rsp.json())
      .then((json) => setRsp(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={CONTENT.tableColHead}
            flexArr={[2, 3, 3, 1]}
            style={styles.head}
            textStyle={styles.text}
          />

          {rsp.data.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              flexArr={[2, 3, 3, 1]}
              style={[
                styles.row,
                rsp.time >= rowData[1] && { backgroundColor: "#DDD" },
              ]}
              textStyle={styles.text}
            />
          ))}
        </Table>
      )}
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
}); */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
    backgroundColor: "#ffffff",
  },
  head: { height: 40, backgroundColor: "#8fcbbc" },
  row: { height: 28 },
  text: { textAlign: "center" },
});
