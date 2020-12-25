const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/specimen-magazine',
    {
        branch: 'main',
        repo: 'https://github.com/themarquisdesheric/specimen-magazine.git',
        user: {
            name: 'themarquisdesheric',
            email: 'themarquisdesheric@gmail.com'
        }
    },
    () => {
        console.log('Deploy complete!')
    }
)
