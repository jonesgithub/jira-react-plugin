package lab.dk.rest.endpoints;

import com.atlassian.plugins.rest.common.security.AnonymousAllowed;
import lab.dk.rest.model.Message;
import lombok.extern.slf4j.Slf4j;

import javax.annotation.Resource;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * A resource of message.
 */
@Slf4j
@Path("/sec")
//@AnonymousAllowed
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
public class RootEndpoint {

    @GET
    //http://dk-imac:2990/jira/rest/react/latest/message
    public Response getMessage() {
        return Response.ok(Message.builder().message("Hello from protected area").build()).build();
    }

    @POST
    public Response postMessage(Message message) {
        return Response.ok(message).build();
    }
}
