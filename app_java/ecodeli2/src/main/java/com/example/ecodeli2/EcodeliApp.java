package com.example.ecodeli2;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;

import java.util.Objects;
import java.io.IOException;

public class EcodeliApp extends Application {

    private Stage primaryStage;

    @Override
    public void start(Stage stage) throws IOException {
        this.primaryStage = stage;
        showLogin();
    }

    public void showLogin() throws IOException {
        FXMLLoader loader = new FXMLLoader(
                EcodeliApp.class.getResource("Login.fxml")
        );
        Parent root = loader.load();

        LoginController controller = loader.getController();
        controller.setApp(this);

        Scene scene = new Scene(root, 350, 300);
        scene.getStylesheets().add(
                Objects.requireNonNull(
                        EcodeliApp.class.getResource("styles.css"),
                        "styles.css not found"
                ).toExternalForm()
        );

        primaryStage.setTitle("EcoDeli – Connection");
        Image icon = new Image(
                Objects.requireNonNull(
                        EcodeliApp.class.getResourceAsStream("ecodeli-logo.png"),
                        "ecodeli-logo.png not found"
                )
        );
        primaryStage.getIcons().add(icon);

        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public void showDashboard() throws IOException {
        FXMLLoader loader = new FXMLLoader(
                EcodeliApp.class.getResource("dashboard.fxml")
        );
        Parent root = loader.load();

        DashboardController ctrl = loader.getController();
        ctrl.setApp(this);

        Scene scene = new Scene(root, 800, 600);
        scene.getStylesheets().add(
                Objects.requireNonNull(
                        EcodeliApp.class.getResource("styles.css"),
                        "styles.css not found"
                ).toExternalForm()
        );

        primaryStage.setTitle("EcoDeli Dashboard");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}
