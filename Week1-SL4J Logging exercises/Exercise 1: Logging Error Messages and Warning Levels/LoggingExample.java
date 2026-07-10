import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    // Create Logger Object
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        System.out.println("SLF4J Logging Demo Started");

        logger.error("This is an error message");

        logger.warn("This is a warning message");

        System.out.println("SLF4J Logging Demo Completed");
    }
}