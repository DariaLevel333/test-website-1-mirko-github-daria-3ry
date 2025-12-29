import type { Config } from "@level-ci/cli";
export default {
 organization: "level-ci-149520796299836-levelaccess-com-tpuji",
 project: "test-website-1-mirko-github-daria",
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 reportPaths: ['./level-ci-reports']
} satisfies Config;