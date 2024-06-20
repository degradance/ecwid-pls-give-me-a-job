package to.stars.service.impl

import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.Response
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component
import to.stars.service.OAuthService

@Component
open class OAuthServiceImpl: OAuthService {
    private val logger: Logger = LoggerFactory.getLogger(OAuthServiceImpl::class.java)

    companion object {
        private val client = OkHttpClient()
        private const val TOKEN = "public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
        private const val STORE_ID = "58958138"
        private const val BASE_URL = "https://app.ecwid.com/api/v3/$STORE_ID/"
    }

    override fun get(tail: String, params: Map<String, String>): String? {
        logger.error("get {} {}", tail, params.toString())
        val requestBuilder = Request.Builder().withDefault(BASE_URL + tail, params).get()
        return newCall(requestBuilder).responseString()
    }

    override fun post(tail: String, body: RequestBody): String? {
        logger.error("post {}", tail)
        val requestBuilder = Request.Builder().withDefault(BASE_URL + tail, emptyMap()).post(body)
        return newCall(requestBuilder).responseString()
    }

    private fun Request.Builder.withDefault(url: String, params: Map<String, String>): Request.Builder = this.url("$url${params.toUrl()}")
        .addHeader("accept", "application/json")
        .addHeader("content-type", "application/json")
        .addHeader("authorization", "Bearer $TOKEN")

    private fun newCall(requestBuilder: Request.Builder): Response {
        return client.newCall(requestBuilder.build()).execute()
    }

    private fun Response.responseString(): String? = this.use {
        val result2body = it.body!!
        val mediaType = result2body.contentType()
        return if (mediaType.toString().contains("application/json")) {
            try {
                result2body.string()
            } catch (e: Exception) {
                logger.error("Response.responseJson() Error! {}", e.stackTraceToString())
                null
            }
        } else {
            logger.error("Response.responseJson() Unexpected response media type: $mediaType")
            null
        }
    }
}

private fun Map<String, String>.toUrl(): String {
    this.ifEmpty { return "" }
    return "?" + this.entries.joinToString("&") { (k, v) -> "$k=$v" }
}
