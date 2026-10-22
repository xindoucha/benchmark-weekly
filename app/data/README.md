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

## Weekly overview assets

Final overview images and their editable sources are stored under
`assets/{issue-slug}/`. Each issue folder should contain the approved PNG and
SVG using stable filenames:

- `source.md` — the verified detailed issue exported from the Library;
- `overview.png` — final image used for publishing and library sync;
- `overview.svg` — editable source for future corrections.

`source.md` is required for new syncs. Every published issue must have both
overview files. Run `npm run generate:overviews` after data changes; the build
automatically copies PNGs into the generated `public/overviews/` directory.

Overview images use the established W42 portrait table composition. The
detailed layout rules live in
`docs/weekly-overview-layout.md`.
