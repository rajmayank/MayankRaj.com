// File names can collide with article names, so resolve only within artwork folders.
const IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

function resolveArtwork(context, name, directory) {
  if (!name || !name.trim()) return null;
  return context.nodeModel.findOne({
    type: "File",
    query: {
      filter: {
        name: { eq: name.trim() },
        relativeDirectory: { eq: directory },
        extension: { in: IMAGE_EXTENSIONS },
      },
    },
  });
}

function selectSocialImage(post, fallbackCover) {
  return (
    post.socialImage?.publicURL || post.cover?.publicURL || fallbackCover?.publicURL
  );
}

module.exports = { resolveArtwork, selectSocialImage };
