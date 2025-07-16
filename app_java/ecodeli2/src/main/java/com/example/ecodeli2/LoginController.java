package com.example.ecodeli2;

import javafx.fxml.FXML;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;

import javafx.application.Platform;


public class LoginController {

    @FXML private TextField    emailField;
    @FXML private PasswordField passwordField;

    private EcodeliApp app;

    public void setApp(EcodeliApp app) {
        this.app = app;
    }

    @FXML
    private void onLoginClicked() {
        System.out.println("[DEBUG] onLoginClicked triggered for : " + emailField.getText());
        String email = emailField.getText().trim();
        String pwd   = passwordField.getText();

        AuthService.login(email, pwd)
                .thenAccept(token -> {
                    Platform.runLater(() -> {

                        if (token != null) {
                            app.setAuthToken(token);
                            try {
                                app.showOtp(token);
                            } catch (Exception e) {
                                e.printStackTrace();
                                AlertHelper.showError("Impossible d’ouvrir le dashboard");
                            }
                        } else {
                            AlertHelper.showError("Email ou mot de passe incorrect");
                        }
                    });
                })
                .exceptionally(ex -> {
                    Platform.runLater(() -> {
                        AlertHelper.showError("Erreur réseau : " + ex.getMessage());
                    });
                    return null;
                });
    }
}
