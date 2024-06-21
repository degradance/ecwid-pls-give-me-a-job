package to.stars.configuration
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory
import org.springframework.boot.web.servlet.server.ServletWebServerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
open class WebConfig {

    /*@Bean
    open fun servletWebServerFactory(): ServletWebServerFactory {
        val factory = TomcatServletWebServerFactory()
        factory.mimeMappings.add("mjs", "application/octet-stream")
        return factory
    }*/
}

