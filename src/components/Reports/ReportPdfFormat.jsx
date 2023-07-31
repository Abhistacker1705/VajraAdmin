// PdfDocument.js
import React from "react";
import {Page, Text, Document, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
  },
});

const PdfDocument = ({data}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Report Data</Text>
      {data.map((item) => (
        <Text key={item.id} style={styles.content}>
          Asset: {item.Asset}
          {" - "}
          Serial No: {item.SerialNo}
          {" - "}
          Date: {item.Date}
          {" - "}
          Status: {item.Status}
          {" - "}
          Due Date: {item.DueDate}
        </Text>
      ))}
    </Page>
  </Document>
);

export default PdfDocument;
