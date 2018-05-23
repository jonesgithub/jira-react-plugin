package lab.dk.rest.endpoints;

import javax.xml.bind.annotation.*;
@XmlRootElement(name = "message")
@XmlAccessorType(XmlAccessType.FIELD)
public class ReactEndpointModel {

    @XmlElement(name = "value")
    private String message;

    public ReactEndpointModel() {
    }

    public ReactEndpointModel(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}