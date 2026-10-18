export default function errorHandler(err, _req, res, _next) {
  console.error("Unhandled application error:", err);

  // Invalid JSON
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      message: "Invalid JSON body",
    });
  }

  // Known HTTP error
  if (err.status) {
    return res.status(err.status).json({
      message: err.message || "Request failed",
    });
  }

  // Unknown error
  return res.status(500).json({
    message: "Internal server error",
  });
}
