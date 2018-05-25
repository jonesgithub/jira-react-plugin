package it.lab.dk.rest.endpoints;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.After;
import org.junit.Before;
import org.mockito.Mockito;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import lab.dk.rest.endpoints.ReactEndpoint;
import lab.dk.rest.endpoints.ReactEndpointModel;
import org.apache.wink.client.Resource;
import org.apache.wink.client.RestClient;

public class ReactEndpointFuncTest {

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

        ReactEndpointModel message = resource.get(ReactEndpointModel.class);

//        assertEquals("wrong message", "Hello World", message.getMessage());
    }
}
