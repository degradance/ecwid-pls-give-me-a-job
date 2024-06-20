package to.stars.controller

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import to.stars.service.OAuthService

@RestController
@RequestMapping("/api")
class ApiController @Autowired constructor(
    private val oAuthService: OAuthService,
    private val objectMapper: ObjectMapper
) {
    private val logger: Logger = LoggerFactory.getLogger(ApiController::class.java)

    @GetMapping("/categories")
    fun getCategories(@RequestParam parentId: Long): List<Any>? {
        val response = oAuthService.get("categories", mapOf(
            "parent" to parentId.toString(),
        ))
        return response?.let {
            val jsonNode = objectMapper.readTree(it)
            val itemsNode = jsonNode.get("items")
            objectMapper.convertValue(itemsNode, object : TypeReference<List<Any>>() {})
        }
    }

    @GetMapping("/category")
    fun getCategory(@RequestParam categoryId: Long): String? {
        return oAuthService.get("categories/$categoryId", emptyMap())
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
