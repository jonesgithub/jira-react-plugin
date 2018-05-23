package lab.dk.rest.endpoints;

import com.atlassian.plugins.rest.common.security.AnonymousAllowed;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * A resource of message.
 */
@Path("/message")
public class ReactEndpoint {

    @GET
    @AnonymousAllowed
    @Produces({MediaType.APPLICATION_JSON})
    //http://dk-imac:2990/jira/rest/react/latest/message
    public Response getMessage()
    {
       return Response.ok(new ReactEndpointModel("Hello World")).build();
    }
}