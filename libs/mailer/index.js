const pug = require('pug');
const { join } = require('path');
const nodemailer = require('nodemailer');

const i18n = require('../i18n');

const {
  smtp,
  client: { baseUrl }
} = require('../../config');

const clientPagesUrl = {
  register: `${ baseUrl }/auth/register/confirm`,
  passwordRecovery: `${ baseUrl }/auth/password/change`
};

const emailTemplatePath = {
  register: join(__dirname, '/templates/auth-confirm-template.pug'),
  passwordRecovery: join(__dirname, '/templates/auth-confirm-template.pug')
};

const transporter = nodemailer.createTransport(smtp);

module.exports = (recipient, action, clientName, token) => {

  const emailDetails = {
    from: 'noreply@smartbot.io',
    to: recipient,
    subject: i18n.__(`email.${ action }.subject`),
    html: pug.compileFile(emailTemplatePath[action], {})({
      emailSubjectText: i18n.__(`email.${ action }.subject`),
      titleText: i18n.__(`email.${ action }.title`, { name: clientName }),
      subtitleText: i18n.__(`email.${ action }.subtitle`),
      hintText: i18n.__(`email.${ action }.hint`),
      buttonText: i18n.__(`email.${ action }.button`),
      warningText: i18n.__(`email.${ action }.warning`),
      descriptionText: i18n.__(`email.${ action }.description`),
      actionConfirmLink: `${ clientPagesUrl[action] }?token=${ token }`,
      footerSiteLink: i18n.__(`email.footer.siteLink`),
      footerTermsLink: i18n.__(`email.footer.termsLink`),
      footerCopyright: i18n.__(`email.footer.copyright`),
    })
  };

  transporter.sendMail(emailDetails, (err, info) => {
    if (err) console.error(JSON.stringify(err, null, 4));

    transporter.close();
  })
}

