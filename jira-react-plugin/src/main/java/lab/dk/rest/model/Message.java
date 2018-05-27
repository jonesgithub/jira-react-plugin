package lab.dk.rest.model;

import lombok.*;
import org.codehaus.jackson.annotate.JsonAutoDetect;

import java.io.Serializable;

@Data
@Builder
@JsonAutoDetect
@NoArgsConstructor
@AllArgsConstructor
public class Message implements Serializable {
    private String message;
}