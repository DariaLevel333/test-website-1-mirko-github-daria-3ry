import type { Config } from "@level-ci/cli";
export default {
 organization: "level-access-6504206478114584-userway-org-hjrgn",
 project: "test-website-1-mirko-github-daria",
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 reportPaths: ['./level-ci-reports']
} satisfies Config;