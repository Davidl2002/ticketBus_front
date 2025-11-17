import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws NoSuchFieldException {
        Scanner scanner = new Scanner(System.in);
        PagoFactory pagoFactory = new PagoFactory();

        System.out.println("Seleccione el método de pago:");
        System.out.println("1. PayPal");
        System.out.println("2. Tarjeta de crédito");
        System.out.println("3. Transferencia bancaria");
        System.out.println("4. Efectivo");

        int opcion = scanner.nextInt();
        TipoDePago tipoDePago;

        switch (opcion) {
            case 1:
                tipoDePago = TipoDePago.PAYPAL;
                break;
            case 2:
                tipoDePago = TipoDePago.TARJETA_CREDITO;
                break;
            case 3:
                tipoDePago = TipoDePago.TRANSFERENCIA_BANCARIA;
                break;
            case 4:
                tipoDePago = TipoDePago.EFECTIVO;
                break;
            default:
                System.out.println("Opción no válida. Seleccionando PayPal por defecto.");
                tipoDePago = TipoDePago.PAYPAL;
                break;
        }

        Pago pago = pagoFactory.obtenerPago(tipoDePago);
        pago.crearPago();
    }
}
