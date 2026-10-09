# ML4R @ ICLR 2027

Website for the **Workshop on Machine Learning for Rare Disease** (ML4R), served at <https://pediamed.ai/ml4r/>.

It is a single-page Jekyll site that started from the [sniffle](https://github.com/krrish94/sniffle-workshop) workshop template (MIT). Its section structure follows gembio.ai. It needs no theme gem or plugins, so GitHub Pages builds it as is.

## Where to edit what

| What | File |
|---|---|
| Title, date, venue, links (OpenReview, travel form, ...), proposal banner, past editions, nav | `_config.yml` |
| Keynote speakers (one file each, body = bio) | `_speakers/*.md`, photos in `assets/img/speakers/` |
| Organizers (one file each, body = bio) | `_organizers/*.md`, photos in `assets/img/organizers/` |
| Schedule (one file per slot; `type`: keynote / contributed / poster / break) | `_schedule/*.md` |
| Accepted papers | `_papers/*.md`; copy `00_example.md` and set `published: true`. The section and its nav link appear automatically. |
| Important dates | `_data/dates.yml` (`highlight: true`, `done: true`) |
| Six challenges | `_data/topics.yml` |
| FAQ (markdown answers) | `_data/faq.yml` |
| Sponsors | `_data/sponsors.yml`, logos in `assets/img/sponsors/` |
| Page sections and copy | `index.html` |
| Styles / scripts | `assets/css/main.css`, `assets/js/main.js` |

Entries are ordered by `order` (people) or `sequence_id` (schedule, papers). A person without `img` shows their initials.

## Preview locally

```bash
JEKYLL_NO_BUNDLER_REQUIRE=true jekyll serve   # then open http://127.0.0.1:4000/ml4r/
# or: bundle install && bundle exec jekyll serve
```

## Deploy

Enable GitHub Pages for this repo (Settings → Pages → Deploy from branch `main`, folder `/`). Because the `PediaMedAI` organization site uses the custom domain `pediamed.ai`, this project site is served at `https://pediamed.ai/ml4r/` (`baseurl: /ml4r`).

## Checklist after acceptance

- Set `status_note: ""` and fill in `date_text` / `location_text`.
- Add `openreview_url`, `template_url`, `travel_form_url`, `reviewer_form_url`.
- Mark finished dates with `done: true`.
