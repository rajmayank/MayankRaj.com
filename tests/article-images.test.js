const { test } = require('node:test');
const assert = require('node:assert/strict');
const { resolveArtwork, selectSocialImage } = require('../lib/article-images');

const files = [
  { name: 'article', relativeDirectory: 'images/blog_covers', extension: 'jpg', publicURL: '/cover.jpg' },
  { name: 'article', relativeDirectory: 'images/blog_og', extension: 'png', publicURL: '/social.png' },
  { name: 'article', relativeDirectory: '', extension: 'md', publicURL: '/article.md' },
  { name: 'not-art', relativeDirectory: 'images/blog_og', extension: 'txt', publicURL: '/not-art.txt' },
];
const context = { nodeModel: { findOne: async ({ query: { filter } }) => files.find(file =>
  file.name === filter.name.eq && file.relativeDirectory === filter.relativeDirectory.eq && filter.extension.in.includes(file.extension)
) || null } };

test('same-stem artwork resolves by purpose without selecting Markdown or non-images', async () => {
  const cover = await resolveArtwork(context, 'article', 'images/blog_covers');
  const socialImage = await resolveArtwork(context, 'article', 'images/blog_og');
  assert.equal(cover.publicURL, '/cover.jpg');
  assert.equal(selectSocialImage({ cover, socialImage }), '/social.png');
  assert.equal(await resolveArtwork(context, 'not-art', 'images/blog_og'), null);
});
test('absent, empty and missing social references fall back through cover and default', async () => {
  for (const name of [undefined, null, '', '  ', 'missing']) {
    const socialImage = await resolveArtwork(context, name, 'images/blog_og');
    assert.equal(socialImage, null);
    assert.equal(selectSocialImage({ socialImage, cover: files[0] }, { publicURL: '/default.jpg' }), '/cover.jpg');
    assert.equal(selectSocialImage({ socialImage }, { publicURL: '/default.jpg' }), '/default.jpg');
    assert.equal(selectSocialImage({ socialImage }), undefined);
  }
});
