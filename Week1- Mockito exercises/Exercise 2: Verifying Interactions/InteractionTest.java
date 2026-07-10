import org.junit.Test;
import org.mockito.Mockito;
import static org.mockito.Mockito.verify;

public class InteractionTest {

    @Test
    public void testVerifyInteraction() {

        // Create Mock Object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Create Service using Mock
        MyService service = new MyService(mockApi);

        // Call Method
        service.fetchData();

        // Verify Interaction
        verify(mockApi).getData();

        System.out.println("getData() method was called successfully.");
        System.out.println("Exercise 2 Passed Successfully");
    }
}