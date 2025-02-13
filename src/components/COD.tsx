// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
//   <title>Вход в Систему</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
// </head>
// <body>

//   <script src="https://cdn.auth0.com/js/lock/13.0/lock.min.js"></script>
//   <script>
//     var config = JSON.parse(decodeURIComponent(escape(window.atob('@@config@@'))));
//     config.extraParams = config.extraParams || {};
//     var connection = config.connection;
//     var prompt = config.prompt;
//     var languageDictionary = {
//   		title: "ЛИЧНЫЙ КАБИНЕТ"  
//     };

//     var lock = new Auth0Lock(config.clientID, config.auth0Domain, {
//       auth: {
//         redirectUrl: config.callbackURL,
//         responseType: (config.internalOptions || {}).response_type ||
//           (config.callbackOnLocationHash ? 'token' : 'code'),
//         params: config.internalOptions
//       },
//       configurationBaseUrl: config.clientConfigurationBaseUrl,
//       overrides: {
//         __tenant: config.auth0Tenant,
//         __token_issuer: config.authorizationServer.issuer
//       },
//       assetsUrl:  config.assetsUrl,
//       allowedConnections: connection ? [connection] : null,
//       rememberLastLogin: !prompt,
//       language: "ru",
//       languageDictionary: languageDictionary,
//       theme: {
//         logo: "https://www.sergey-mavrodi.com/portrait.jpg",
//         primaryColor: "green"
//       },
//       prefill: config.extraParams.login_hint ? { email: config.extraParams.login_hint, username: config.extraParams.login_hint } : null,
//       closable: false,
//       defaultADUsernameFromEmailPrefix: false,
//       identifierFirst: true,
//       allowSignUp: true,
//       allowForgotPassword: true,
//       allowedConnections: ["Username-Password-Authentication"]
//     });

//     var style = document.createElement('style');
//     style.appendChild(document.createTextNode(`
//       .auth0-lock.auth0-lock .auth0-lock-overlay { background: transparent !important; }
//       body { background: url("https://www.sergey-mavrodi.com/images/bg.jpg") repeat; }
//     `));
//     document.head.appendChild(style);

//     lock.show();
//   </script>
// </body>
// </html>    