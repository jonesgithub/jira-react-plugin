package lab.dk.jira.impl;

import com.atlassian.plugin.spring.scanner.annotation.export.ExportAsService;
import com.atlassian.plugin.spring.scanner.annotation.imports.ComponentImport;
import com.atlassian.sal.api.ApplicationProperties;
import lab.dk.jira.api.ReactPluginComponent;

import javax.inject.Inject;
import javax.inject.Named;

@ExportAsService ({ReactPluginComponent.class})
@Named ("reactPluginComponent")
public class ReactPluginComponentImpl implements ReactPluginComponent
{
    @ComponentImport
    private final ApplicationProperties applicationProperties;

    @Inject
    public ReactPluginComponentImpl(final ApplicationProperties applicationProperties)
    {
        this.applicationProperties = applicationProperties;
    }

    public String getName()
    {
        if(null != applicationProperties)
        {
            return "reactPluginComponent:" + applicationProperties.getDisplayName();
        }
        
        return "reactPluginComponent";
    }
}