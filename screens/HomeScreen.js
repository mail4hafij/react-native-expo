import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Table, Row } from "react-native-table-component";
import { APIURL, ACCESS_KEY } from "@env";

const CONTENT = {
  tableColHead: ["", "Today", "Tomorrow"],
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

var DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [rsp, setRsp] = useState([]);
  const now = new Date();
  const time = now.getHours() + ":" + now.getMinutes();

  useEffect(() => {
    fetch(APIURL + "/getPrayerTime/" + ACCESS_KEY)
      .then((rsp) => rsp.json())
      .then((json) => {
        if (json.error) {
          setLoading(true);
          alert(json.error);
          return;
        }
        setRsp(json);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <View style={styles.header}>
        <Text style={{ paddingTop: 20 }}>Prayer times in Uppsala</Text>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading</Text>
        ) : (
          <>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text h4 style={{ paddingBottom: 10 }}>
                {now.getFullYear() +
                  "-" +
                  ("0" + (now.getMonth() + 1)).slice(-2) +
                  "-" +
                  ("0" + now.getDate()).slice(-2) +
                  " " +
                  MONTHS[now.getMonth()] +
                  " " +
                  DAYS[now.getDay()]}
              </Text>
            </View>

            <Table borderStyle={{ borderWidth: 1 }}>
              <Row
                data={CONTENT.tableColHead}
                flexArr={[2, 3, 3, 1]}
                style={styles.tableHead}
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
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  tableHead: { height: 40, backgroundColor: "#8fcbbc" },
  row: { height: 28 },
  text: { textAlign: "center" },
});
