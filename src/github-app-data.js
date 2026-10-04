import { LitElement, html, css } from 'lit';

export class GithubAppData extends LitElement {
  static properties = {
    owner: { type: String },
    repo: { type: String },
    show: { type: String },
    _data: { state: true },
    _error: { state: true },
  };

  static styles = css`
    :host { display: block; }
    a { color: inherit; }
  `;

  constructor() {
    super();
    this._data = null;
    this._error = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.load();
  }

  async load() {
    try {
      const base = `https://api.github.com/repos/${this.owner}/${this.repo}`;
      const headers = {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      };
      const [repo, releases, issues] = await Promise.all([
        fetch(base, { headers }).then(this.check),
        fetch(`${base}/releases?per_page=10`, { headers }).then(this.check),
        fetch(`${base}/issues?state=open&per_page=10`, { headers }).then(this.check),
      ]);
      this._data = {
        repo,
        releases: releases.filter(item => !item.pull_request),
        issues: issues.filter(item => !item.pull_request),
      };
    } catch (error) {
      this._error = error instanceof Error ? error.message : 'GitHub data is unavailable.';
    }
  }

  check(response) {
    if (!response.ok) throw new Error(`GitHub API returned ${response.status}.`);
    return response.json();
  }

  render() {
    if (this._error) {
      return html`<div class="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
        GitHub information is temporarily unavailable. <a href="https://github.com/${this.owner}/${this.repo}">Open repository</a>.
      </div>`;
    }

    if (!this._data) {
      return html`<div class="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">Loading GitHub information…</div>`;
    }

    const { repo, releases, issues } = this._data;
    return html`
      <div class="grid gap-6 md:grid-cols-2">
        <section class="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div class="mb-4 flex items-center justify-between gap-3">
            <h2 class="text-lg font-semibold">Repository</h2>
            <span class="rounded-full border border-border px-2.5 py-1 text-xs font-medium">${repo.default_branch}</span>
          </div>
          <dl class="space-y-3 text-sm">
            <div class="flex justify-between gap-4"><dt class="text-muted-foreground">Stars</dt><dd>${repo.stargazers_count}</dd></div>
            <div class="flex justify-between gap-4"><dt class="text-muted-foreground">Open issues</dt><dd>${issues.length}</dd></div>
            <div class="flex justify-between gap-4"><dt class="text-muted-foreground">Updated</dt><dd>${new Date(repo.updated_at).toLocaleDateString()}</dd></div>
          </dl>
          <a class="mt-5 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground" href="${repo.html_url}">Open GitHub →</a>
        </section>

        <section class="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h2 class="mb-4 text-lg font-semibold">Latest Releases</h2>
          ${releases.length ? html`<ul class="space-y-3">${releases.map(release => html`
            <li class="border-b border-border pb-3 last:border-0 last:pb-0">
              <a class="font-medium hover:underline" href="${release.html_url}">${release.name || release.tag_name}</a>
              <div class="text-xs text-muted-foreground">${new Date(release.published_at || release.created_at).toLocaleDateString()}</div>
            </li>` )}</ul>` : html`<p class="text-sm text-muted-foreground">No releases found.</p>`}
        </section>
      </div>

      <section class="mt-6 rounded-xl border border-border bg-card p-5 shadow-sm">
        <h2 class="mb-4 text-lg font-semibold">Open Issues</h2>
        ${issues.length ? html`<ul class="divide-y divide-border">${issues.map(issue => html`
          <li class="py-3 first:pt-0 last:pb-0">
            <a class="font-medium hover:underline" href="${issue.html_url}">#${issue.number}: ${issue.title}</a>
          </li>` )}</ul>` : html`<p class="text-sm text-muted-foreground">No open issues found.</p>`}
      </section>
    `;
  }
}

customElements.define('github-app-data', GithubAppData);
