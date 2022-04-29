export function getCommentLinks() {
  return Array.from(document.links)
    .map((link) => {
      if (
        link.href.length < 200 &&
        link.href.includes('/comments/') &&
        link.textContent &&
        !link.textContent?.includes('comment') &&
        !link.textContent?.includes('comments') &&
        !link.textContent?.includes('hours ago') &&
        !link.textContent?.includes('years ago')
      ) {
        return {
          href: link.href,
          textContent: link.textContent,
        };
      };
    })
    .filter((link) => link && link);
};