import {
  BarChart3,
  Camera,
  Cloud,
  Code2,
  Database,
  FileCode2,
  FileCheck2,
  Hospital,
  LayoutTemplate,
  Mail,
  Megaphone,
  Monitor,
  Rotate3d,
  Server,
  Shield,
  SquareCode,
  Target,
  Terminal,
  Webhook,
  type LucideIcon,
} from "lucide-react"

import { BRAND_ICONS } from "@/lib/brand-icons.generated"

/**
 * Adobe withdrew its marks from open icon sets, and a few stack entries are
 * capabilities rather than products, so those fall back to semantic icons.
 */
const FALLBACK_ICONS: Record<string, LucideIcon> = {
  "Adobe Experience Cloud": Cloud,
  "Adobe Experience Manager": LayoutTemplate,
  "Adobe Analytics": BarChart3,
  "Adobe Target": Target,
  "Adobe Campaign": Megaphone,
  "Adobe Photoshop": Camera,
  "Adobe Premiere Pro": Camera,
  "Adobe After Effects": Camera,
  "REST APIs": Webhook,
  "Drone Photography": Camera,
  "360° Virtual Tours": Rotate3d,
  "Visual Studio": Code2,
  "ASP.NET": SquareCode,
  "C#": FileCode2,
  "SQL Server": Server,
  ".NET Framework": SquareCode,
  "Entity Framework": Database,
  IIS: Monitor,
  "Windows Server": Monitor,
  "Web Hosting": Cloud,
  "SSL/TLS": Shield,
  PowerShell: Terminal,
  "Crystal Reports": BarChart3,
  "Email/SMS Gateways": Mail,
  "HL7 FHIR": Hospital,
  LGPD: FileCheck2,
}

const BRAND_SLUGS: Record<string, string> = {
  Laravel: "laravel",
  PHP: "php",
  MySQL: "mysql",
  Redis: "redis",
  Flutter: "flutter",
  Dart: "dart",
  Android: "android",
  iOS: "ios",
  Firebase: "firebase",
  "Google Ads": "googleads",
  "Meta Ads": "meta",
  "Google Analytics": "googleanalytics",
  "Google Search Console": "googlesearchconsole",
  SEMrush: "semrush",
  ".NET": "dotnet",
  HTML5: "html5",
  Bootstrap: "bootstrap",
  JavaScript: "javascript",
  jQuery: "jquery",
  Linux: "linux",
  XML: "xml",
  JSON: "json",
  CSS: "css",
  Python: "python",
  FastAPI: "fastapi",
  PostgreSQL: "postgresql",
  RabbitMQ: "rabbitmq",
  "React Native": "react",
  Angular: "angular",
  TypeScript: "typescript",
  OpenJDK: "openjdk",
  "Spring Boot": "springboot",
  Docker: "docker",
  NGINX: "nginx",
  OpenSSL: "openssl",
  "JSON Web Tokens": "jsonwebtokens",
  Auth0: "auth0",
  Keycloak: "keycloak",
  "Let's Encrypt": "letsencrypt",
  IEEE: "ieee",
  "OpenAPI Initiative": "openapiinitiative",
  WebAuthn: "webauthn",
  Go: "go",
  Golang: "go",
  "Java Spring Boot": "springboot",
  MongoDB: "mongodb",
  Elasticsearch: "elasticsearch",
  "Apache Kafka": "apachekafka",
  SQLite: "sqlite",
  Kubernetes: "kubernetes",
  React: "react",
}

export function TechIcon({ technology }: { technology: string }) {
  const brand = BRAND_ICONS[BRAND_SLUGS[technology] ?? ""]

  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-6"
        style={{ fill: brand.hex }}
        aria-hidden
      >
        <path d={brand.path} />
      </svg>
    )
  }

  const Fallback = FALLBACK_ICONS[technology] ?? Cloud

  return (
    <Fallback className="size-6 text-[#072448]" strokeWidth={1.6} aria-hidden />
  )
}
