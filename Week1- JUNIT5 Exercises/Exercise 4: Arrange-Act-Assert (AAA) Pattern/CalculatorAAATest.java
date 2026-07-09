import org.junit.After;
import static org.junit.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;

public class CalculatorAAATest {

    private Calculator calculator;

    @Before
    public void setUp() {

        System.out.println("Setting up test...");

        calculator = new Calculator();
    }

    @After
    public void tearDown() {

        System.out.println("Cleaning up after test...");
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = 15;
        int b = 25;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(40, result);
    }

    @Test
    public void testSubtraction() {

        // Arrange
        int a = 30;
        int b = 10;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(20, result);
    }

}