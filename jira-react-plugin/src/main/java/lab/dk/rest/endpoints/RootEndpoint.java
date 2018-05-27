package lab.dk.rest.endpoints;

import lab.dk.rest.model.Message;
import lombok.extern.slf4j.Slf4j;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * A resource of message.
 */
@Slf4j
@Path("/")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
public class RootEndpoint {

    @GET
    public Response getMessage() {
        return Response.ok(Message.builder().message("Hello from protected area").build()).build();
    }

    @POST
    public Response postMessage(Message message) {
        return Response.ok(message).build();
    }
}
