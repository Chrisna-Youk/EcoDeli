package com.example.ecodeli2;

import javafx.fxml.FXML;
import javafx.scene.control.Alert;
import javafx.scene.control.DialogPane;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.image.Image;
import javafx.stage.Stage;

public class LoginController {

    @FXML private TextField    emailField;
    @FXML private PasswordField passwordField;

    private EcodeliApp app;

    public void setApp(EcodeliApp app) {
        this.app = app;
    }

    @FXML
    private void onLoginClicked() {
        String email = emailField.getText().trim();
        String pwd   = passwordField.getText();

        if ("admin@ecodeli.com".equals(email) && "Respons11".equals(pwd)) {
            try {
                app.showDashboard();
            } catch (Exception e) {
                e.printStackTrace();
                showError("Loading dashboard failed");
            }
        } else {
            showError("Email or password incorrect");
        }
    }

    private void showError(String message) {
        Alert alert = new Alert(Alert.AlertType.ERROR);
        alert.setTitle("Erreur");
        alert.setHeaderText(null);
        alert.setContentText(message);

        Image logo = new Image(
                EcodeliApp.class.getResourceAsStream("ecodeli-logo.png")
        );

        Stage dialogStage = (Stage) alert.getDialogPane().getScene().getWindow();
        dialogStage.getIcons().clear();
        dialogStage.getIcons().add(logo);

        DialogPane pane = alert.getDialogPane();
        pane.getStylesheets().add(
                EcodeliApp.class.getResource("styles.css").toExternalForm()
        );
        pane.getStyleClass().add("alert-error");

        alert.showAndWait();
    }
}
