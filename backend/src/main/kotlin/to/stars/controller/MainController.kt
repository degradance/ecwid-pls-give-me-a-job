package to.stars.controller

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseStatus

@Controller
class MainController {
    private val logger: Logger = LoggerFactory.getLogger(MainController::class.java)

    @GetMapping(path = ["/", "/home", "/categories/**", "/cart"])
    fun index(): String {
        return "/index.html"
    }

    @ExceptionHandler(Exception::class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    fun handleException(
        exception: Exception
    ): ResponseEntity<String?>? {
        logger.error(exception.stackTraceToString())
        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(exception.toString())
    }
}
