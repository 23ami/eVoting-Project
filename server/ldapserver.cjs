const ldap = require('ldapjs');

// Define the base DN and directory tree structure
const baseDn = 'ou=myapp,dc=localhost';
const tree = {
  ou: 'myapp',
  dc: 'localhost',
  admin: {
    cn: ['amitkumar10.cse@gmail.com'],
    userPassword: ['Asdf@123']
  }
};

// Create an LDAP server
const server = ldap.createServer();

// Set up the server to handle BIND requests
server.bind(baseDn, async (req, res, next) => {
  const { dn, credentials } = req;

  // Look up the user's credentials in the directory tree
  const user = tree.users[cnFromDn(dn)];
  if (!user || user.userPassword.indexOf(credentials) === -1) {
    return next(new ldap.InvalidCredentialsError());
  }

  // Authentication successful
  res.end();
});

// Start the server
server.listen(1389, () => {
  console.log('LDAP server listening on port 1389');
});

// Utility function to extract the cn component from a DN
function cnFromDn(dn) {
  return dn.split(',')[0].split('=')[1];
}