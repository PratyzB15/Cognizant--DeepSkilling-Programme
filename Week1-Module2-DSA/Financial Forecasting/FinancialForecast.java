public class FinancialForecast {

    static double calculateFutureValue(double amount, double rate, int year) {

        if (year == 0) {
            return amount;
        }

        double nextAmount = amount + (amount * rate);

        return calculateFutureValue(nextAmount, rate, year - 1);
    }

    public static void main(String[] args) {

        double currentAmount = 10000;
        double annualGrowthRate = 0.10;
        int numberOfYears = 5;

        double futureAmount = calculateFutureValue(currentAmount, annualGrowthRate, numberOfYears);

        System.out.println("========== Financial Forecast ==========");
        System.out.println("Current Value      : ₹" + currentAmount);
        System.out.println("Annual Growth Rate : " + (annualGrowthRate * 100) + "%");
        System.out.println("Forecast Years     : " + numberOfYears);
        System.out.printf("Predicted Value    : ₹%.2f", futureAmount);
    }
}