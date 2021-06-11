import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { APIURL, ACCESS_TOKEN } from "@env";

const CONTENT = {
  tableColHead: ["", "Today", "Tomorrow"],
  tableRowHead: ["Fajr", "Sunrise", "Zuhr", "Asr", "Maghrib", "Isha"],
  tableData: [
    ["1", "2"],
    ["a", "b"],
    ["1", "2"],
    ["a", "b"],
    ["1", "2"],
    ["a", "b"],
  ],
  tableDataWithLabel: [
    ["Fajr", "1", "2"],
    ["Sunrise", "a", "b"],
    ["Zuhr", "1", "2"],
    ["Asr", "a", "b"],
    ["Maghrib", "1", "2"],
    ["Isha", "a", "b"],
  ],
};

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [rsp, setRsp] = useState([]);
  const now = new Date();
  const time = now.getHours() + ":" + now.getMinutes();

  useEffect(() => {
    fetch(APIURL + "/" + ACCESS_TOKEN)
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

          {/* {CONTENT.tableDataWithLabel.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              flexArr={[2, 3, 3, 1]}
              style={[styles.row, index % 2 && { backgroundColor: "#F7F6E7" }]}
              textStyle={styles.text}
            />
          ))} */}

          {/* <TableWrapper style={styles.wrapper}>
            <Col
              data={CONTENT.tableRowHead}
              style={styles.title}
              heightArr={[28, 28]}
              textStyle={styles.text}
            />

            <Rows
              data={CONTENT.tableData}
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper> */}
        </Table>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "orange" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#2ecc71" },
  row: { height: 28 },
  text: { textAlign: "center" },
});
