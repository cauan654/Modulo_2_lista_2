public class Nadador {

    public static String categoria(int idade) {
        if (idade >= 5 && idade <= 7) {
            return "Infantil A";
        } else if (idade >= 8 && idade <= 10) {
            return "Infantil B";
        } else if (idade >= 11 && idade <= 13) {
            return "Juvenil A";
        } else if (idade >= 14 && idade <= 17) {
            return "Juvenil B";
        } else {
            return "Adulto";
        }
    }

    public static void main(String[] args) {
        int idade = 12;
        String categoria = categoria(idade);
        System.out.println("O(A) nadador(a) tem " + idade + " anos e pertence à categoria " + categoria);
    }
}