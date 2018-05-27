package lab.dk.servlet;

import com.atlassian.plugin.spring.scanner.annotation.component.JiraComponent;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import com.atlassian.templaterenderer.TemplateRenderer;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@JiraComponent
public class IndexPageServlet extends HttpServlet {

    private final TemplateRenderer templateRenderer;
    private static final String INDEX_TEMPLATE = "vm/index.vm";

    @Inject
    public IndexPageServlet(@ComponentImport TemplateRenderer templateRenderer) {
        this.templateRenderer = templateRenderer;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        templateRenderer.render(INDEX_TEMPLATE, resp.getWriter());
    }

}