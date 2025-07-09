package com.example.ecodeli2;

import javafx.fxml.FXML;
import javafx.scene.chart.LineChart;
import javafx.scene.chart.PieChart;
import javafx.scene.control.Label;
import javafx.scene.control.Tooltip;
import javafx.scene.control.Button;
import javafx.scene.control.CheckBox;
import javafx.geometry.Insets;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;

import java.util.Map;

public class DashboardController {

    @FXML
    private StackPane contentPane;

    @FXML
    public void initialize() {
        showHome();
    }

    @FXML
    private void showHome() {
        contentPane.getChildren().clear();

        Map<String, Double> dist = DashboardData.getYearlyRevenueByCategory(2025);

        double total = dist.values().stream()
                .mapToDouble(Double::doubleValue)
                .sum();

        PieChart pie = new PieChart();
        pie.setTitle("Global Revenue 2025");

        dist.forEach((category, value) -> {
            PieChart.Data slice = new PieChart.Data(category, value);
            pie.getData().add(slice);

            double pct = (value / total) * 100;
            String text = String.format("%s: %.1f%%", category, pct);
            Tooltip.install(slice.getNode(), new Tooltip(text));
        });

        contentPane.getChildren().add(pie);
    }

    @FXML
    private void showSales() {
        contentPane.getChildren().clear();

        LineChart<String, Number> chart = ChartsBuilder.buildSalesChartAllYears();
        contentPane.getChildren().add(chart);
    }
    @FXML
    private void showReports() {
        contentPane.getChildren().clear();
        Label lbl = new Label("Section Rapports (à construire)");
        lbl.setStyle("-fx-font-size: 18px; -fx-text-fill: #555;");
        contentPane.getChildren().add(lbl);
    }

    @FXML
    private void showSettings() {
        contentPane.getChildren().clear();
        VBox form = new VBox(10,
                new Label("Paramètres"),
                new CheckBox("Activer notifications"),
                new Button("Enregistrer")
        );
        form.setPadding(new Insets(20));
        contentPane.getChildren().add(form);
    }
}
