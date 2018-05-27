package it.lab.dk.rest.endpoints;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.After;
import org.junit.Before;

import lab.dk.rest.model.Message;
import org.apache.wink.client.Resource;
import org.apache.wink.client.RestClient;

public class PublicEndpointFuncTest {

    @Before
    public void setup() {

    }

    @After
    public void tearDown() {

    }

    @Test
    @Ignore
    public void messageIsValid() {

        String baseUrl = System.getProperty("baseurl");
        String resourceUrl = baseUrl + "/rest/react/1.0/message";

        RestClient client = new RestClient();
        Resource resource = client.resource(resourceUrl);

        Message message = resource.get(Message.class);

//        assertEquals("wrong message", "Hello World", message.getMessage());
    }
}
