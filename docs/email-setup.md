# Website email

Contact submissions notify `admin@phakamawomens.org` and `tedwell@outlook.com`. The visitor receives an acknowledgement after an admin recipient accepts the message. Admin messages use the visitor's email as Reply-To; acknowledgements use the organisation's contact address.

The SMTP sender is `noreply@shearwatervf.com`, using `smtp.itanywhere.africa` on port 587 with required STARTTLS and certificate verification. Both email templates embed the supplied Phakama logo, so they do not depend on a publicly hosted image loading.

Non-secret defaults are in `appsettings.json`. Server environment variables take precedence:

```text
EMAIL_HOST=smtp.itanywhere.africa
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USERNAME=noreply@shearwatervf.com
EMAIL_PASSWORD=<set privately>
EMAIL_REF_LINK=https://www.phakamawomens.org
ADMIN_EMAILS=admin@phakamawomens.org,tedwell@outlook.com
```

The supplied password is configured locally in the Git-ignored `.env.local`. Set the same server variables in the hosting platform before deploying; local environment files are not committed. Do not use a `NEXT_PUBLIC_` prefix for mail settings.

To send a real test, explicitly specify recipients (Node.js 24 supports loading the TypeScript mailer):

```powershell
node scripts/test-smtp.mjs recipient@example.com second@example.com
```

The script verifies TLS and authentication, sends one branded test message per recipient, and reports SMTP acceptance or rejection. SMTP acceptance confirms that the server queued a message; only the recipient can confirm inbox delivery.
