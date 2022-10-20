package mx.uv.c80688;

import static spark.Spark.*;

public class App {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        get("/hello", (req, res) -> "Hello A todes");
        get("/adios", (req, res) -> "Adios A todes");
    }
}
