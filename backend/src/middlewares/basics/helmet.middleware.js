import helmet from "helmet";

const helmetMiddleware = () => {
  return helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "'strict-dynamic'", `${process.env.URL}`], 
        "style-src": ["'self'"],  // Removed 'unsafe-inline'
        "img-src": ["'self'", "data:", "https:"],
        "connect-src": ["'self'", `${process.env.URL}`],
        "font-src": ["'self'", "https:", "data:"],
        "object-src": ["'none'"],
        "media-src": ["'self'"],
        "frame-src": ["'none'"],
      },
    },
    crossOriginOpenerPolicy: { policy: "same-origin" },  // Protection against tab-nabbing
    dnsPrefetchControl: { allow: false },
    expectCt: { maxAge: 86400, enforce: true },
    frameguard: { action: "deny" },
    hidePoweredBy: true,
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    ieNoOpen: true,
    noSniff: true,
    originAgentCluster: true,
    permittedCrossDomainPolicies: { policy: "none" },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    xXssProtection: true,  // Legacy XSS protection (for old browsers)
  });
};

export default helmetMiddleware;
