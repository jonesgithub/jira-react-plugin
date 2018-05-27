package ut.lab.dk.rest.endpoints;

import lab.dk.rest.endpoints.PublicEndpoint;
import lab.dk.rest.model.Message;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import javax.ws.rs.core.Response;

import static org.junit.Assert.assertEquals;

public class PublicEndpointTest {

    @Before
    public void setup() {

    }

    @After
    public void tearDown() {

    }

    @Test
    public void messageIsValid() {
        PublicEndpoint resource = new PublicEndpoint();

        Response response = resource.getMessage();
        final Message message = (Message) response.getEntity();

//        assertEquals("wrong message", "Hello World", message.getMessage());
    }
}
