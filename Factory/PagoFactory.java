public class PagoFactory {
    
    public Pago obtenerPago(TipoDePago tipoDePago) throws NoSuchFieldException{

        return switch(tipoDePago){
           case PAYPAL-> new PagoPayPal();
           case EFECTIVO-> new PagoEfectivo();
           case TARJETA_CREDITO-> new PagoTarjeta();
           case TRANSFERENCIA_BANCARIA-> new PagoTransferencia();
        };
    }
}
