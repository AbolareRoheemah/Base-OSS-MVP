const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
      "header": "eyJmaWQiOjEwMjQ1MjMsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg5RDY0NmViRjVFRTcyQzhkNzJFNGJlMzBGYTdGMTA2MDA0QjBFOTU0In0",
      "payload": "eyJkb21haW4iOiJiYXNlLW9zcy1hcHAudmVyY2VsLmFwcCJ9",
      "signature": "b2hXVJVnO0OM+TU7mwTwj0PvvkaZW4BR+itamd5SUXsKEkuZnvEqcbmXYSzEIcNzrB0eAz9ssZpoDsp2hR/QQRw="
    },
  miniapp: {
    version: "1",
    name: "Base OSS Match", 
    subtitle: "Base Ecosystem Projects", 
    description: "Match OSS contributors with relevant projects in the Base ecosystem.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

