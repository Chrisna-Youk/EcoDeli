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

import java.io.IOException;
import java.util.Map;

public class DashboardController {

    @FXML
    private StackPane contentPane;

    private EcodeliApp app;

    public void setApp(EcodeliApp app) {
        this.app = app;
    }

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
            String text = String.format("%s: %.1f%%", category, (value / total) * 100);
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
        Label lbl = new Label("TODO");
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


    @FXML
    private void onSignOutClicked() {
        try {
            app.showLogin();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
