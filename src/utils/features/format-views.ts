export function fromNow(date: number | string | Date) {
  const validDate = date instanceof Date ? date : new Date(date);

  if (isNaN(validDate.getTime())) {
    return 'Invalid date';
  }

  const now = new Date();
  const diff = now.getTime() - validDate.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
  return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
}

export function formatViews(views: number) {
  if (views >= 1000000000) {
    const hundreds = views / 1000000;
    return `${hundreds.toFixed(1)}B`;
  }

  if (views >= 1000000) {
    const hundreds = views / 1000000;
    return `${hundreds.toFixed(1)}M`;
  }

  if (views >= 1000) {
    const thousands = views / 1000;
    return `${thousands.toFixed(1)}K`;
  }

  return views.toString();
}
