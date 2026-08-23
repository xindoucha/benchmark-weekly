# Weekly digest data

Each weekly sync creates one TypeScript file in `issues/` and exports a single
`DigestIssue` object as its default export. The filename should match the issue
slug, for example `w35.ts`.

The site discovers every file in `issues/` automatically and sorts them by
`dateStart`:

- the newest issue becomes the content shown at `/weekly`;
- all older issues appear in the archive and resolve at `/archive/{slug}`;
- both Chinese and English pages read from the same issue object.

No page component or data registry needs to be changed when a new issue is
added. Use `types.ts` as the schema reference and an existing issue file as the
sync template.
