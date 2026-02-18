## 2026-06-03 - PII Logging and Raw Error Exposure
**Vulnerability:** API routes were logging sensitive user data (phone numbers) directly to the console and returning raw error messages to the client.
**Learning:** The codebase defaults to `console.log` for debugging and returning `error.message` in catch blocks, which leaks internal state and user PII.
**Prevention:** Use a logger with redaction capabilities for PII. Always sanitize error messages in API responses to generic messages, logging the specific error internally.
