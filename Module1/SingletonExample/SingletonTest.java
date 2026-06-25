public class SingletonTest {

    public static void main(String[] args) {

        // Get first Logger object
        Logger logger1 = Logger.getInstance();
        logger1.log("Application Started");

        // Get second Logger object
        Logger logger2 = Logger.getInstance();
        logger2.log("User Logged In");

        // Verify Singleton behavior
        if (logger1 == logger2) {
            System.out.println("\nOnly ONE Logger instance exists.");
        } else {
            System.out.println("\nMultiple Logger instances exist.");
        }

        // Print hash codes
        System.out.println("Logger1 HashCode: " + logger1.hashCode());
        System.out.println("Logger2 HashCode: " + logger2.hashCode());
    }
}