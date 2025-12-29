import type { Config } from "@level-ci/cli";
export default {
 organization: "level-ci-8459664868123198-levelaccess-com-ylklp",
 project: "test-website-1-mirko-github-daria",
 token: process.env.LEVEL_CI_TOKEN,
  server: "https://api.dev.userway.dev",
 reportPaths: ['./level-ci-reports']
} satisfies Config;