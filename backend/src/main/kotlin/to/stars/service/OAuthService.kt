package to.stars.service

import okhttp3.RequestBody

interface OAuthService {
    fun get(tail: String, params: Map<String, String>): String?
    fun post(tail: String, body: RequestBody): String?
}
