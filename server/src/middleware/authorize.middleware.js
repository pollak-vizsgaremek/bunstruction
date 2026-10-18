const requireRoles = (allowedRoles = []) => {
  if (!Array.isArray(allowedRoles) || allowedRoles.length === 0) {
    throw new Error("RequireRoles needs at least one allowed role.");
  }

  return (req, res, next) => {
    const userRoles = req.user?.roles;

    if (!Array.isArray(userRoles)) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    const hasPermission = userRoles.some((role) => allowedRoles.includes(role));

    if (!hasPermission) {
      return res.status(403).json({
        message: "You do not have permission to access this resource.",
      });
    }

    next();
  };
};

export { requireRoles };
