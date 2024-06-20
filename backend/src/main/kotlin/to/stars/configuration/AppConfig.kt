package to.stars.configuration

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import com.fasterxml.jackson.databind.ObjectMapper

@Configuration
open class AppConfig {
    @Bean
    open fun objectMapper(): ObjectMapper {
        return ObjectMapper()
    }
}
