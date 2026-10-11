# Search indexing and launch

The official domain is `https://www.phakamawomens.org`, configured in
`src/data/siteConfig.ts`. All canonical URLs, sitemap entries and organisation
structured data use that address.

## What the app provides

- `/sitemap.xml`: automatically generated page and image sitemap for all nine
  public pages, including the community gallery images.
- `/robots.txt`: permits public page crawling, excludes API endpoints and points
  crawlers to the sitemap. A robots exclusion is not access control.
- A separate canonical URL, title, description and social preview for each page.
- Organisation and website JSON-LD on the homepage, with the name, logo, contact
  details and Hwange service area. No unconfirmed charity status or ratings.
- Optional Google and Bing ownership verification meta tags.

Maintain page metadata and sitemap membership in `src/data/searchPages.ts`.
Run `npm run build` followed by `npm run check:seo` to validate the generated
sitemap, canonical URLs, unique metadata, robots rules and structured data.
Use `pageMetadata(path)` in each new page. Keep image descriptions accurate.
The sitemap deliberately omits `lastmod`: a deployment date must not be presented
as the date every page's content changed.

## Required before public indexing

1. Configure the domain's DNS with your hosting provider and deploy the app.
   Both the root domain and `www` need valid HTTPS. Redirect the root domain and
   HTTP requests permanently to `https://www.phakamawomens.org`, retaining paths
   and query strings. Configure this with the actual host's domain settings.
2. Check that public pages, `/robots.txt` and `/sitemap.xml` return HTTP 200
   without sign-in, bot challenges or a hosting-level `X-Robots-Tag: noindex`.
   Check that a nonexistent page returns 404. Keep staging hosts out of search
   using hosting access restrictions or staging-specific noindex headers.
3. Add the domain to [Google Search Console](https://search.google.com/search-console).
   Prefer DNS verification for the domain property. For URL-prefix HTML meta-tag
   verification instead, set `GOOGLE_SITE_VERIFICATION` to the token supplied by
   Google in your hosting environment, then rebuild and deploy. Use the token
   only, not the entire `<meta>` tag.
4. Submit `https://www.phakamawomens.org/sitemap.xml` in Search Console's Sitemaps
   report. Inspect the homepage and key programme pages, then request indexing.
5. Add the site to [Bing Webmaster Tools](https://www.bing.com/webmasters/).
   For HTML meta-tag verification set `BING_SITE_VERIFICATION` to the supplied
   token and redeploy, then submit the same sitemap.
6. Validate the deployed homepage with the
   [Rich Results Test](https://search.google.com/test/rich-results) and monitor
   Search Console's indexing reports for crawl errors and canonical conflicts.

Optional local/hosting environment variables (leave unset until tokens exist):

```dotenv
GOOGLE_SITE_VERIFICATION=your-google-verification-token
BING_SITE_VERIFICATION=your-bing-verification-token
```

No verification tokens have been invented or added to `.env.local`.
At the implementation check, the intended domain did not resolve from this
environment. Deployment, DNS and account verification are separate from these
code changes; sitemap submission has not been performed.

## Ongoing discoverability

Keep Phakama's name, location and contact details consistent on its real public
profiles. Publish accurate, useful initiative updates with confirmed details,
descriptive headings and relevant internal links. Seek genuine links from
community partners. Review search queries and indexing reports after launch.
Sitemaps and structured data help discovery and understanding; search engines
decide whether and where to show pages, so rankings cannot be guaranteed.

References: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls),
[organisation structured data](https://developers.google.com/search/docs/appearance/structured-data/organization).
