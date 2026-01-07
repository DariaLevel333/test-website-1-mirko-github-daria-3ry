import type { Config } from "@level-ci/cli";
export default {
 organization: "level-ci-9982245362484546-levelaccess-com-zhysx",
 project: "test-website-1-mirko-github-daria",
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 reportPaths: ['./level-ci-reports']
} satisfies Config;