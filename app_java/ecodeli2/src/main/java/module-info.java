module com.example.ecodeli2 {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.web;

    requires org.controlsfx.controls;
    requires net.synedra.validatorfx;
    requires org.kordamp.ikonli.javafx;
    requires org.kordamp.bootstrapfx.core;
    requires eu.hansolo.tilesfx;

   requires com.fasterxml.jackson.databind;

    opens com.example.ecodeli2 to javafx.fxml;
    exports com.example.ecodeli2;
}
