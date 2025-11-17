public class PagoEfectivo implements Pago {
    @Override
    public void crearPago(){
        System.out.println("El pago se realiza de manera fisica (Efectivo)");
    }
}
