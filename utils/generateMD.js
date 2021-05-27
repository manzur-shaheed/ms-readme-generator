// module to generate readme text
const licences = require('./licenses.js');
const saveMD = require('./saveMD.js');

function generateMD(response) {
    var licText = licences(response.projLic);
    const markdown = `
# Title
# ${response.projName}

## Description
${response.projDesc}
# Owner
${response.projOwner}
# Installation
${response.projInst}
# User Guide
${response.projUG}
# Testing
${response.projTest}
# Credits
${response.projCredit}
# Contribution Guidelines
${response.projContrib}
# License
${licText}
# Github
${response.projGit}
# Email
${response.projEmail}
`;
    saveMD(markdown);
}

module.exports = generateMD;