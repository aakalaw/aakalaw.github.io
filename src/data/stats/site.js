import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/aakalaw/aakalaw.github.io
 */
const data = [
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
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */

    /*
    # Define the root directory to start the search, e.g., the current directory
    $rootDir = "."

    # Get all .js files recursively
    $files = Get-ChildItem -Path $rootDir -Recurse -Filter *.js | Where-Object {
        # Exclude files with patterns
        $_.FullName -notmatch '\.min\.js$' -and
        $_.FullName -notmatch '\\node_modules\\' -and
        $_.FullName -notmatch '\\\.git\\' -and
        $_.FullName -notmatch '\.json$'
    }

    # Initialize line count
    $totalLines = 0

    # Iterate over each file and count lines
    foreach ($file in $files) {
        $lineCount = (Get-Content -Path $file.FullName | Measure-Object -Line).Lines
        $totalLines += $lineCount
    }

    # Output the total line count
    $totalLines
    */
    label: 'Lines of Javascript powering this website',
    value: '1501',
    link: 'https://github.com/aakalaw/aakalaw.github.io/graphs/contributors',
  },
];

export default data;
