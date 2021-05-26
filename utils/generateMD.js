// module to generate readme text
const lic = require('./licenses');

function generateMD(response) {
    var licText = lic.getLicText(response.projLic);
    const markdown = `
# Title
# ${response.projName}
${badge}
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
}

module.exports = generateMD;