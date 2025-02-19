const getUrl = (url: string, type: string) => {
  switch (type) {
    case "email":
      return `mailto:${url}`;
    case "tel":
      return `tel:${url}`;
    case "url":
      return url.startsWith("http://") || url.startsWith("https://")
        ? url
        : `https://${url}`;
    default:
      return url;
  }
};

export const getExternalLinkProps = (url: string, type: string) => {
  return {
    href: getUrl(url, type),
    target: type === "url" ? "_blank" : undefined,
    rel: type === "url" ? "noopener noreferrer" : undefined,
  };
};
