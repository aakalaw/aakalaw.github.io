import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/aakalaw/aakalaw.github.io
 */
const data: StatData[] = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/aakalaw/aakalaw.github.io/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/aakalaw/aakalaw.github.io/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/aakalaw/aakalaw.github.io/network',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/aakalaw/aakalaw.github.io/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/aakalaw/aakalaw.github.io/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    /*# Define the root directory
$rootDir = "."

# Get all .ts files recursively, excluding unwanted paths
$files = Get-ChildItem -Path $rootDir -Recurse -Filter *.ts | Where-Object {
    $_.FullName -notmatch '\.min\.ts$' -and
    $_.FullName -notmatch '\\node_modules\\' -and
    $_.FullName -notmatch '\\\.git\\' -and
    $_.FullName -notmatch '\.json$'
}

# Initialize total line count
$totalLines = 0

# Count lines for each file
foreach ($file in $files) {
    $lineCount = (Get-Content -Path $file.FullName | Measure-Object -Line).Lines
    $totalLines += $lineCount
}

# Output total
$totalLines
*/
    label: 'Lines of TypeScript powering this website',
    value: '965',
    link: 'https://github.com/aakalaw/aakalaw.github.io/graphs/contributors',
  },
];

export default data;
