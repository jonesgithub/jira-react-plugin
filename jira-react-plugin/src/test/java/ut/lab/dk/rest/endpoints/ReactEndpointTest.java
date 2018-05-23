package ut.lab.dk.rest.endpoints;

import org.junit.Test;
import org.junit.After;
import org.junit.Before;
import org.mockito.Mockito;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
import lab.dk.rest.endpoints.ReactEndpoint;
import lab.dk.rest.endpoints.ReactEndpointModel;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.GenericEntity;

public class ReactEndpointTest {

    @Before
    public void setup() {

    }

    @After
    public void tearDown() {

    }

    @Test
    public void messageIsValid() {
        ReactEndpoint resource = new ReactEndpoint();

        Response response = resource.getMessage();
        final ReactEndpointModel message = (ReactEndpointModel) response.getEntity();

        assertEquals("wrong message","Hello World",message.getMessage());
    }
}
